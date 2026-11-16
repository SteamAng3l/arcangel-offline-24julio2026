const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function enviarNotificacion() {
  const hoy = new Date();
  const mes = hoy.getMonth() + 1;
  const dia = hoy.getDate();
  
  console.log(`Revisando si hoy (${dia}/${mes}) es una fecha especial...`);
  
  // Condición de prueba (para hoy)
  if (mes === 11 && dia === 16) {
    
    console.log("Fecha especial encontrada. Obteniendo usuarios...");
    
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
        title: "🎄 ¡Prueba de Robot para Todos!",
        body: "¡Hola a todos! Este mensaje se envió a todos los dispositivos registrados."
      },
      tokens: tokens // Mandamos el arreglo de tokens
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
