// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open('first-app')
//       .then(function(cache) {
//         cache.addAll([
//           '/',
//           '/index.html',
//           '/script/index.js',
//           '/resource/bootstrap.min.css',
//           '/resource/bootstrap.min.js',
//           '/resource/jquery.min.css'
//         ])
//       })
//   );
//   return self.clients.claim();
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(res) {
//         return res;
//       })
//   );
// });

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open('static')
      .then(function(cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.add('/index.html')
      })
  )
});


self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
