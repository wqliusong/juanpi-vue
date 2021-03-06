// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import { Button, Select } from 'element-ui';
import App from './App'
import MintUI from 'mint-ui'
import router from './router'
import vSwiper from '@/components/Swiper.vue'
import vNavbar from '@/components/Navbar.vue'
import vInScroll from '@/components/infinite-scroll.vue'
import vFooter from '@/components/footer.vue'
import vGoodsSwier from '@/components/goodsSwiper.vue'
import store from './store'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(MintUI)
Vue.component('v-swiper', vSwiper)
Vue.component('v-navbar', vNavbar)
Vue.component('v-inScroll', vInScroll)
Vue.component('v-footer', vFooter)
Vue.component('v-goosSwiper', vGoodsSwier)
// Vue.use(Button)
// Vue.use(Select)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
