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
  
  let tituloNoti = "";
  let cuerpoNoti = "";

  // ==========================================
  // AQUÍ CONFIGURAMOS LAS FECHAS Y MENSAJES
  // ==========================================

  if (mes === 1 && dia === 1) {
    tituloNoti = "🎉 ¡Feliz Año Nuevo!";
    cuerpoNoti = "Que este nuevo año esté lleno de bendiciones. Abre Arcángel para empezar con fe.";
  } 
  else if (mes === 2 && dia === 2) {
    tituloNoti = "🕯️ Día de la Candelaria";
    cuerpoNoti = "Hoy presentamos al Niño Dios. Abre Arcángel y acompáñanos con una oración.";
  }
  else if (mes === 5 && dia === 10) {
    tituloNoti = "🌹 ¡Feliz Día de las Madres!";
    cuerpoNoti = "Ora por tu mamá hoy. Abre Arcángel y dedícale una bendición especial.";
  }
  else if (mes === 9 && dia === 29) {
    tituloNoti = "👼 Hoy es San Miguel Arcángel";
    cuerpoNoti = "San Miguel te protege hoy y siempre. Abre Arcángel para rezar su oración.";
  }
  else if (mes === 10 && dia === 28) {
    tituloNoti = "🕯️ Día de San Judas Tadeo";
    cuerpoNoti = "El santo de las causas difíciles intercede por ti. Abre Arcángel para orar.";
  }
  else if (mes === 11 && dia === 1) {
    tituloNoti = "😇 Solemnidad de Todos los Santos";
    cuerpoNoti = "Celebramos a quienes están en la presencia de Dios. Abre Arcángel para recordarlos.";
  }
  else if (mes === 11 && dia === 2) {
    tituloNoti = "🕯️ Fieles Difuntos";
    cuerpoNoti = "Ora por tus seres queridos que partieron. Abre Arcángel y enciende una oración.";
  }
  else if (mes === 12 && dia === 12) {
    tituloNoti = "🌹 ¡Hoy es la Virgen de Guadalupe!";
    cuerpoNoti = "La Morenita te espera. Abre Arcángel y acompáñanos en su novena.";
  }
  else if (mes === 12 && dia === 24) {
    tituloNoti = "🎄 ¡Feliz Nochebuena!";
    cuerpoNoti = "El Salvador está por nacer. Abre Arcángel para rezar las Posadas o una oración de Navidad.";
  }
  else if (mes === 12 && dia === 25) {
    tituloNoti = "👶 ¡Feliz Navidad!";
    cuerpoNoti = "Que la luz del Niño Dios ilumine tu hogar. Abre Arcángel para celebrar con fe.";
  }
  else if (mes === 12 && dia === 31) {
    tituloNoti = "🎆 Fin de Año";
    cuerpoNoti = "Da gracias por este año. Abre Arcángel para despedir el año con una oración.";
  }
  // Fecha de prueba (puedes borrarla después)
  else if (mes === 11 && dia === 16) {
    tituloNoti = "🎄 ¡Prueba Real de Notificación!";
    cuerpoNoti = "El sistema automático está funcionando perfectamente.";
  }

  // ==========================================
  // LÓGICA DE ENVÍO
  // ==========================================

  if (tituloNoti !== "") {
    console.log(`Fecha especial encontrada: ${tituloNoti}. Obteniendo usuarios...`);
    
    // 1. Obtener todos los usuarios de Firestore
    const snapshot = await db.collection('usuarios').get();
    
    if (snapshot.empty) {
      console.log("No hay usuarios registrados aún.");
      return;
    }

    const tokens = [];
    snapshot.forEach(doc => {
      tokens.push(doc.data().token);
    });

    console.log(`Enviando a ${tokens.length} dispositivos...`);

    // 2. Preparar el mensaje masivo
    const mensaje = {
      notification: {
        title: tituloNoti,
        body: cuerpoNoti
      },
      tokens: tokens 
    };

    // 3. Enviar a todos
    try {
      const response = await admin.messaging().sendEachForMulticast(mensaje);
      console.log(`¡Éxito! Mensajes enviados: ${response.successCount}`);
      if (response.failureCount > 0) {
        console.log(`Fallos: ${response.failureCount}`);
      }
    } catch (error) {
      console.error("Error al enviar:", error);
    }
  } else {
    console.log("Hoy no toca enviar notificación.");
  }
}

enviarNotificacion();
