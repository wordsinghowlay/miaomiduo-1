import Vue 	  from 'vue'
import store  from './vuex/store'
import router from './router/routerConfig'
import filter from './filter/filter'

import infiniteScroll   from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  error: 'http://d.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=0c96dc86da33c895a62b907fe4235fc6/0823dd54564e9258d2bb2dff9f82d158ccbf4e17.jpg',
  loading: 'dist/loading.gif',
  try: 3 // default 1
})

//import wxjssdk from './../static/jweixin-1.0.0.js'
	//判断是否微信
    let ua = window.navigator.userAgent.toLowerCase();
    let isWx = (ua.match(/MicroMessenger/i) == 'micromessenger');
	if (isWx) {

	}

new Vue({
  el: '#app',
  router:router.router,
  store
}).$mount('#app')
