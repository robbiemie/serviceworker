import Vue from 'vue'
import App from '@/module/App.vue' // eslint-disable-line

function init () {
  if ('serviceWorker' in navigator) {
    // register
    navigator.serviceWorker.register('@/seriveworker/sw.js')
  }
  new Vue({ // eslint-disable-line
    el: '#app',
    render: h => h(App)
  })
}

init()
