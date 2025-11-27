// sw.js - Minimal Service Worker
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('my-store').then((cache) => cache.addAll([
            './index.html',
            './manifest.json',
            // Add other assets (css, js, images) here
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});