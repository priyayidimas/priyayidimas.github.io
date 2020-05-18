const CACHE_NAME = 'reiseziel_cache';
var urlsToCache = [
	'/',
	'/assets/manifest.json',
	'/index.html',
	'/bundle.js',
];
self.addEventListener('install', function(ev){
	ev.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});
self.addEventListener('activate', function(ev){
	ev.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName){
					if(cacheName != CACHE_NAME){	
						console.log("ServiceWorker: cache " + cacheName + " deleted");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request, {cacheName:CACHE_NAME}).then(function(response) {
			if (response) {
                console.log("From Cache");
				return response;
			}
			var fetchRequest = event.request.clone();
			return fetch(fetchRequest).then(function(response) {
				if(!response || response.status !== 200) {
					return response;
				}
				var responseToCache = response.clone();
				caches.open(CACHE_NAME).then(function(cache) {
					cache.put(event.request, responseToCache);
                });
                console.log("FROM URL");
				return response;
			});
	  	})
	);
});
