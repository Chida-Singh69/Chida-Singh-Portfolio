const CACHE_NAME = 'chida-portfolio-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logos/chida_head_logo.png',
  '/logos/chida_icon.png',
  '/background/Overworld_poster.png',
  '/background/Nether_poster.png'
];

// Large videos to cache (they require range request handling)
const VIDEO_ASSETS = [
  '/background/Overworld_wallpaper_compressed.mp4',
  '/background/Nether_wallpaper_compressed.mp4'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Pre-cache static assets
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Specialized range request handler for Safari/Video support
const handleRangeRequest = async (request, cache) => {
  const cachedResponse = await cache.match(request);
  if (!cachedResponse) {
    return fetch(request);
  }

  const rangeHeader = request.headers.get('range');
  if (!rangeHeader) {
    return cachedResponse;
  }

  const bytes = await cachedResponse.arrayBuffer();
  const match = rangeHeader.match(/bytes=(\d+)-(\d+)?/);
  if (!match) {
    return cachedResponse;
  }

  const start = parseInt(match[1], 10);
  const end = match[2] ? parseInt(match[2], 10) : bytes.byteLength - 1;

  if (start >= bytes.byteLength || end >= bytes.byteLength) {
    return new Response('', {
      status: 416,
      statusText: 'Requested Range Not Satisfiable',
      headers: { 'Content-Range': `bytes */${bytes.byteLength}` }
    });
  }

  const slicedBytes = bytes.slice(start, end + 1);
  return new Response(slicedBytes, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      ...cachedResponse.headers,
      'Content-Range': `bytes ${start}-${end}/${bytes.byteLength}`,
      'Content-Length': slicedBytes.byteLength,
      'Accept-Ranges': 'bytes'
    }
  });
};

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Handle Videos separately for Range Support
  if (VIDEO_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => handleRangeRequest(event.request, cache))
    );
    return;
  }

  // Stale-While-Revalidate for everything else
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback for offline if not in cache
        return cachedResponse;
      });

      return cachedResponse || fetchPromise;
    })
  );
});
