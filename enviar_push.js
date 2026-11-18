const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function enviarNotificacion() {
  const hoy = new Date();
  const mes = hoy.getMonth() + 1; // Enero = 1, Diciembre = 12
  const dia = hoy.getDate();
  
  console.log(`Revisando si hoy (${dia}/${mes}) es una fecha especial...`);
  
  let tituloFestivo = "";
  let cuerpoFestivo = "";

  // ==========================================
  // AQUÍ CONFIGURAMOS LAS FECHAS ESPECIALES
  // ==========================================
  if (mes === 1 && dia === 1) {
    tituloFestivo = "🎉 ¡Feliz Año Nuevo!";
    cuerpoFestivo = "Que este nuevo año esté lleno de bendiciones. Abre Arcángel para empezar con fe.";
  } 
  else if (mes === 2 && dia === 2) {
    tituloFestivo = "🕯️ Día de la Candelaria";
    cuerpoFestivo = "Hoy presentamos al Niño Dios. Abre Arcángel y acompáñanos con una oración.";
  }
  else if (mes === 5 && dia === 10) {
    tituloFestivo = "🌹 ¡Feliz Día de las Madres!";
    cuerpoFestivo = "Ora por tu mamá hoy. Abre Arcángel y dedícale una bendición especial.";
  }
  else if (mes === 9 && dia === 29) {
    tituloFestivo = "👼 Hoy es San Miguel Arcángel";
    cuerpoFestivo = "San Miguel te protege hoy y siempre. Abre Arcángel para rezar su oración.";
  }
  else if (mes === 10 && dia === 28) {
    tituloFestivo = "🕯️ Día de San Judas Tadeo";
    cuerpoFestivo = "El santo de las causas difíciles intercede por ti. Abre Arcángel para orar.";
  }
  else if (mes === 11 && dia === 1) {
    tituloFestivo = "😇 Solemnidad de Todos los Santos";
    cuerpoFestivo = "Celebramos a quienes están en la presencia de Dios. Abre Arcángel para recordarlos.";
  }
  else if (mes === 11 && dia === 2) {
    tituloFestivo = "🕯️ Fieles Difuntos";
    cuerpoFestivo = "Ora por tus seres queridos que partieron. Abre Arcángel y enciende una oración.";
  }
  else if (mes === 12 && dia === 12) {
    tituloFestivo = "🌹 ¡Hoy es la Virgen de Guadalupe!";
    cuerpoFestivo = "La Morenita te espera. Abre Arcángel y acompáñanos en su novena.";
  }
  else if (mes === 12 && dia === 24) {
    tituloFestivo = "🎄 ¡Feliz Nochebuena!";
    cuerpoFestivo = "El Salvador está por nacer. Abre Arcángel para rezar las Posadas o una oración de Navidad.";
  }
  else if (mes === 12 && dia === 25) {
    tituloFestivo = "👶 ¡Feliz Navidad!";
    cuerpoFestivo = "Que la luz del Niño Dios ilumine tu hogar. Abre Arcángel para celebrar con fe.";
  }
  else if (mes === 12 && dia === 31) {
    tituloFestivo = "🎆 Fin de Año";
    cuerpoFestivo = "Da gracias por este año. Abre Arcángel para despedir el año con una oración.";
  }

  // ==========================================
  // LÓGICA DE ENVÍO
  // ==========================================

  if (tituloFestivo !== "") {
    // ES UNA FECHA ESPECIAL: Se envía a TODOS.
    console.log(`Fecha especial encontrada: ${tituloFestivo}. Obteniendo TODOS los usuarios...`);
    
    const snapshot = await db.collection('usuarios').get();
    if (snapshot.empty) {
      console.log("No hay usuarios registrados aún.");
      return;
    }

    const tokens = [];
    snapshot.forEach(doc => { tokens.push(doc.data().token); });

    console.log(`Enviando a ${tokens.length} dispositivos...`);

    const mensaje = {
      notification: { title: tituloFestivo, body: cuerpoFestivo },
      tokens: tokens 
    };

    try {
      const response = await admin.messaging().sendEachForMulticast(mensaje);
      console.log(`¡Éxito! Mensajes enviados: ${response.successCount}`);
    } catch (error) {
      console.error("Error al enviar:", error);
    }

  } else {
    // NO ES FECHA ESPECIAL: Se envía el versículo diario SOLO a quienes quieren.
    console.log("No es fecha especial. Preparando Versículo del Día...");
    
    // Filtrar solo a los usuarios que tienen quiereVersiculo === true
    const snapshot = await db.collection('usuarios').where('quiereVersiculo', '==', true).get();
    
    if (snapshot.empty) {
      console.log("Nadie ha activado el versículo diario hoy.");
      return;
    }

    const tokens = [];
    snapshot.forEach(doc => { tokens.push(doc.data().token); });

    console.log(`Enviando versículo diario a ${tokens.length} dispositivos...`);

    // Para esta prueba, pondré un versículo fijo. 
    // Luego podemos hacer que el robot elija uno aleatorio de tu categories.js
    const versiculoFijo = "El Señor es mi pastor, nada me falta. (Salmos 23:1)";

    const mensaje = {
      notification: { 
        title: "✨ Tu Versículo del Día", 
        body: versiculoFijo 
      },
      tokens: tokens 
    };

    try {
      const response = await admin.messaging().sendEachForMulticast(mensaje);
      console.log(`¡Éxito! Mensajes enviados: ${response.successCount}`);
    } catch (error) {
      console.error("Error al enviar:", error);
    }
  }
}

enviarNotificacion();
