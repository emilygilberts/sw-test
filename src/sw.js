// sw.js
self.addEventListener('install', function(event) {
    console.log('in sw file, trying to install');
    event.waitUntil(
        caches.open('my-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log('in sw file, trying to fetch');
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
