let cacheFiles = [
  './test.js',
  './index.html',
  './src/img/yy.png'
]
let __version__ = 'cache-v2'
// 文件缓存
self.addEventListener('install', e => {
  // 强制更新sw
  self.skipWaiting()
  e.waitUntil(
    caches.open(__version__).then(cache => {
      return cache.addAll(cacheFiles)
    })
  )
})
// 缓存更新
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== __version__) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
// 请求代理
self.addEventListener('fetch', function (event) {
  console.log('Handling fetch event for', event.request.url)
  if (event.request.url.match('sockjs')) return
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log('Found response in cache:', response)

        return response
      }
      console.log('No response found in cache. About to fetch from network...', caches)

      return fetch(event.request).then(function (response) {
        console.log('Response from network is:', response)
        caches.open(__version__).then(function (cache) {
          cache.put(event.request, response)
          return response
        })
      }).catch(function (error) {
        console.error('Fetching failed:', error)

        throw error
      })
    })
  )
})
