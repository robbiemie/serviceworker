if (navigator.serviceWorker) {
  console.log('worker')
  navigator.serviceWorker.register('./sw.js').then(res => {
    console.log('注册成功')
  }).catch(err => {
    console.log('注册失败', err)
  })
}
