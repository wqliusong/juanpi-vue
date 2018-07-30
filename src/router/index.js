import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/routes/home'
import Classify from '@/routes/classify'
import Car from '@/routes/car'
import Myjp from '@/routes/myjp'
import Goods from '@/routes/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/myjp',
      name: 'Myjp',
      component: Myjp
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }
  ]
})
