import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Service from '@/components/Service'
import Bootstrap from '@/components/Bootstrap'
import VueParticles from 'vue-particles'
import Home from '@/components/Home'

Vue.use(VueParticles)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/callservice',
      name: 'Service',
      component: Service
    },
    {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
