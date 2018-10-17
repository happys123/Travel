import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home         //当文件大时可改成() => import('@/pages/home/Home')来实现异步加载
  },{
    path: '/city',
    name: 'City',
    component: City
  },{
    path: '/detail/:id',    //:id为动态路由
    name: 'Detail',
    component: Detail       
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
