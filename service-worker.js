const CACHE_NAME = 'reiseziel_cache';
var urlsToCache = [
	'/',
	'/manifest.json',
	'/index.html',
	'/pages/home.html',
	'/pages/about.html',
	'/pages/contact.html',
	'/pages/book.html',
	'/assets/css/materialize.min.css',
	'/assets/css/fonts.min.css',
	'/assets/css/style.min.css',
	'/assets/js/materialize.min.js',
	'/assets/js/script.js',
	'/assets/images/icons/plane.png',
	'/assets/images/bali.jpg',
	'/assets/images/bandung.jpg',
	'/assets/images/jakarta.jpg',
	'/assets/images/koala.jpg',
	'/assets/images/service-owl-bg.png',
	'/assets/images/sp-1.png',
	'/assets/images/sp-2.png',
	'/assets/images/sp-3.png',
	'/assets/fonts/icons.woff2'
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
self.addEventListener('fetch', function(ev) {
	ev.respondWith(
		caches.match(ev.request, {cacheName:CACHE_NAME}).then(function(response) {
			if(response){
				console.log("ServiceWorker: LocalAssets: ", response.url);
				return response;
			}
			console.log("ServiceWorker: LoadAssets: ", ev.request.url);
			return fetch(ev.request);
		})
	);
});

