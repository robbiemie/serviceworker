
if (navigator.serviceWorker) {
  let image = document.createElement('img')
  image.src = './src/img/yy.png'
  document.body.appendChild(image)
  console.log('image')
  console.log('worker')
  navigator.serviceWorker.register('./sw.js').then(registration => {
    console.log('注册成功')
    let serviceWorker
    if (registration.installing) {
      serviceWorker = registration.installing
      console.log('当前状态为: installing', serviceWorker)
    } else if (registration.waiting) {
      serviceWorker = registration.waiting
      console.log('当前状态为: waiting', serviceWorker)
    } else if (registration.activating) {
      serviceWorker = registration.activating
      console.log('当前状态为: activating', serviceWorker)
    }
    if (serviceWorker) {
      serviceWorker.addEventListener('statechange', e => {
        console.log('当前状态变化为: ', e.target.state)
      })
    }
  }).catch(err => {
    console.log('注册失败', err)
  })
}
