// Este archivo se encarga de las notificaciones en segundo plano
self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/504/504230.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/504/504230.png',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});