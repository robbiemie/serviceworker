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
self.addEventListener('fetch', e => {
  // if (e.request.url.match('sockjs')) return
  e.respondWith(
    caches.match(e.request).catch(_ => {
      return fetch(e.request)
    }).then(res => {
      caches.open(__version__).then(cache => {
        cache.put(e.request, res)
      })
      return res.clone()
    }).catch(res => {
      return res
    })
  )
})
