const staticCacheName = "static";
const assets = [
    "/ASSETS/favicon/android-icon-144x144.png",
    "/ASSETS/favicon/android-icon-192x192.png",
    "/ASSETS/favicon/android-icon-36x36.png",
    "/ASSETS/favicon/android-icon-48x48.png",
    "/ASSETS/favicon/android-icon-72x72.png",
    "/ASSETS/favicon/android-icon-96x96.png",
    "/ASSETS/favicon/apple-icon-114x114.png",
    "/ASSETS/favicon/apple-icon-120x120.png",
    "/ASSETS/favicon/apple-icon-144x144.png",
    "/ASSETS/favicon/apple-icon-152x152.png",
    "/ASSETS/favicon/apple-icon-180x180.png",
    "/ASSETS/favicon/apple-icon-57x57.png",
    "/ASSETS/favicon/apple-icon-60x60.png",
    "/ASSETS/favicon/apple-icon-72x72.png",
    "/ASSETS/favicon/apple-icon-76x76.png",
    "/ASSETS/favicon/apple-icon-precomposed.png",
    "/ASSETS/favicon/apple-icon.png",
    "/ASSETS/favicon/favicon-16x16.png",
    "/ASSETS/favicon/favicon-32x32.png",
    "/ASSETS/favicon/favicon-512x512.png",
    "/ASSETS/favicon/favicon-96x96.png",
    "/ASSETS/favicon/favicon.ico",
    "/ASSETS/favicon/ms-icon-144x144.png",
    "/ASSETS/favicon/ms-icon-150x150.png",
    "/ASSETS/favicon/ms-icon-310x310.png",
    "/ASSETS/favicon/ms-icon-70x70.png"
];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", (evt) => {
    evt.respondWith(
        caches.match(evt.request).then((cacheRes) => {
            return cacheRes || fetch(evt.request);
        })
    );
});
