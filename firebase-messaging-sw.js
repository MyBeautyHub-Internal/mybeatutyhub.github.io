// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAOnIdVtRo8Xq64i7r3cK8vCoDcXwP0x0c',
  authDomain: 'mybeautyapp-7a645.firebaseapp.com',
  projectId: 'mybeautyapp-7a645',
  storageBucket: 'mybeautyapp-7a645.appspot.com',
  messagingSenderId: '264632956120',
  appId: '1:264632956120:web:8d6d814b542b512f0693ad',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
