import Vue 	  from 'vue'
import store  from './vuex/store'
import router from './router/routerConfig'
import filter from './filter/filter'

import infiniteScroll   from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
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
