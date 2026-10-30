self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ibri-pwa-v2').then((cache) => {
      return cache.addAll(['/', '/index.html', '/posts.js']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('push', (e) => {
  const data = e.data ? e.data.json() : { title: 'IBRI Live Broadcast', body: 'The Sabbath broadcast is now LIVE!' };
  
  const options = {
    body: data.body,
    icon: 'ibri-community-network-icon.png',
    badge: 'ibri-community-network-icon.png',
    vibrate: [200, 100, 200]
  };

  e.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(
    clients.openWindow('/')
  );
});
