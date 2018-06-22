import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import VueLazyload from 'vue-lazyload'
fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  loading: require('./common/image/default.png')
  // attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
