let cacheFiles = [
  'test.js'
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cache-v1').then(cache => {
      return cache.addAll(cacheFiles)
    })
  )
})
self.addEventListener('fetch', function (evt) {
  evt.respondWith(
    caches.match(evt.request).then(function (response) {
      if (response) {
        return response
      }
      var request = evt.request.clone()
      return fetch(request).then(function (response) {
        if (!response && response.status !== 200 && !response.headers.get('Content-type').match(/image/)) {
          return response
        }
        var responseClone = response.clone()
        caches.open('cache-v1').then(function (cache) {
          cache.put(evt.request, responseClone)
        })
        return response
      })
    })
  )
})
