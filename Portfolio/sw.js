self.addEventListener('install', function (event) {
    console.log('SW installeb d');
    event.waitUntil(
        caches.open('static')
            .then(function (cache) {
                cache.addAll([
                    '/',
                    '/index.html',
                    '/capture.html',
                    '/capture2.html',
                    '/capture.html',
                    '/js/app.js',
                    '/css/app.css',
                    'https://fonts.googleapis.com/css?family=Oleo+Script',
                    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
                    '/vendor/bootstrap/css/bootstrap.css',
                    '/vendor/bootstrap/css/bootstrap.css.map',
                    '/vendor/bootstrap/css/bootstrap.min.css.map',
                    '/vendor/bootstrap/css/bootstrap.min.css',
                    '/vendor/bootstrap/css/bootstrap-grid.css',
                    '/vendor/bootstrap/css/bootstrap-reboot.css',
                    '/vendor/bootstrap/css/bootstrap-reboot.min.css',
                    '/vendor/bootstrap/js/bootstrap.bundle.js',
                    '/vendor/bootstrap/js/bootstrap.bundle.js.map',
                    '/vendor/bootstrap/js/bootstrap.bundle.min.js',
                    '/vendor/bootstrap/js/bootstrap.bundle.min.js.map',
                    '/vendor/bootstrap/js/bootstrap.js',
                    '/vendor/bootstrap/js/bootstrap.js.map',
                    '/vendor/bootstrap/js/bootstrap.min.js',
                    '/vendor/bootstrap/js/bootstrap.min.js.map',
                    '/vendor/jquery/jquery.js',
                    '/vendor/jquery/jquery.min.js',
                    '/vendor/jquery/jquery.min.map',
                    '/vendor/jquery/jquery.slim.js',
                    '/vendor/jquery/jquery.slim.min.js',
                    '/vendor/jquery/jquery.slim.min.map',
                    '/img/aquarium.jpg',
                    '/img/babys.jpg',
                    '/img/birds.jpg',
                    '/img/blue.jpg',
                    '/img/boholbeach.JPG',
                    '/img/bora.jpg',
                    '/img/bukchon.jpg',
                    '/img/corn.jpg',
                    '/img/davaobeach.JPG',
                    '/img/everland.jpg',
                    '/img/everme.jpg',
                    '/img/flowers.jpg',
                    '/img/food.JPG',
                    '/img/grad.jpg',
                    '/img/gradback.jpg',
                    '/img/guma.jpg',
                    '/img/icon96.png',
                    '/img/icon128.png',
                    '/img/icon256.png',
                    '/img/icon512.png',
                    '/img/infinity.jpg',
                    '/img/lava.jpg',
                    '/img/margarita.JPG',
                    '/img/me.jpg',
                    '/img/mojito.jpg',
                    '/img/pagudpod.jpg',
                    '/img/paint.jpg',
                    '/img/palm.jpg',
                    '/img/pizza.jpg',
                    '/img/ramen.JPG',
                    '/img/rbb.jpg',
                    '/img/spades.jpg',
                    '/img/sunset.jpg'
                ]);
            })
    );
});

self.addEventListener('activate', function (event) {
    console.log('SW activated');
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (res) {
                if (res) {
                    return res;
                } else {
                    return fetch(event.request);
                }
            })
    );
});
