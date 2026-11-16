// firebase-messaging-sw.js
// Service Worker para recibir notificaciones push en segundo plano

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Tu misma configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA09LpE45IafrNer8BHL_0W9HYH7-osZxU",
  authDomain: "arcangelapp-push.firebaseapp.com",
  projectId: "arcangelapp-push",
  storageBucket: "arcangelapp-push.firebasestorage.app",
  messagingSenderId: "202077867375",
  appId: "1:202077867375:web:fd0449ab9afca07f56ac9a"
};

// Inicializar Firebase en el Service Worker
firebase.initializeApp(firebaseConfig);

// Obtener el servicio de mensajería
const messaging = firebase.messaging();

// Esta función escucha los mensajes que llegan cuando la app está cerrada
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje recibido en segundo plano: ', payload);

  const notificationTitle = payload.notification.title || 'Arcángel';
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'pergamino.jpg', // Puedes cambiar esto por el logo de tu app
    badge: 'pergamino.jpg'
  };

  // Muestra la notificación en el celular
  self.registration.showNotification(notificationTitle, notificationOptions);
});
