const admin = require('firebase-admin');

// Leer la llave de seguridad guardada en GitHub Secrets
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// ==========================================
// ⚠️ AQUÍ PONEMOS TU TOKEN PARA LA PRUEBA ⚠️
// (Luego lo cambiaremos por el envío a todos)
const MI_TOKEN_DE_PRUEBA = "dK5it7BxOpkop3GGbhN7IJ:APA91bFJ8qAN3RfNjjNq4NpacHqqSTtChrxTTtWzVQjai9FYM0qG8GKsTCP03LRoYYUPlBzmNQjjCqMzxHxeGV6QUASWEr6J2vl1beNuOHYaHO2DuDue-7g";
// ==========================================

async function enviarNotificacion() {
  const hoy = new Date();
  const mes = hoy.getMonth() + 1; // Enero = 1, Diciembre = 12
  const dia = hoy.getDate();
  
  console.log(`Revisando si hoy (${dia}/${mes}) es una fecha especial...`);
  
  // Ejemplo de prueba: Forzamos a que hoy es Navidad (25 de diciembre)
  // Cuando ya funcione, esto leerá tu archivo fechas.js automáticamente
  if (mes === 11 && dia === 16) { // 16 de noviembre para probar
    const mensaje = {
      token: MI_TOKEN_DE_PRUEBA,
      notification: {
        title: "🎄 ¡Prueba de Robot Automático!",
        body: "¡Hola Miguel! Si ves esto, GitHub Actions funciona perfecto."
      },
      webpush: {
        notification: {
          icon: "peregamino.jpg" // Opcional
        }
      }
    };
    
    try {
      const response = await admin.messaging().send(mensaje);
      console.log("¡Notificación enviada con éxito!", response);
    } catch (error) {
      console.error("Error al enviar:", error);
    }
  } else {
    console.log("Hoy no es una fecha especial configurada en el script.");
  }
}

enviarNotificacion();
