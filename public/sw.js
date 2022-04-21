self.addEventListener("install", (e) => {
  e.waitUntil(
    // Give the cache a name
    caches.open("glitch-in-bio-pwa").then((cache) => {
      // Cache the homepage and stylesheets - add any assets you want to cache!
      return cache.addAll([
        "/",
        "/styles/style.css",
        "/styles/themes/miguelnunes.css",
      ]);
    })
  );
});

// Network falling back to cache approach
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request);
    })
  );
});
