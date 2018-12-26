import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/pages/sign_in.vue'
import SignUp from '@/components/pages/sign_up.vue'
import HomePage from '@/components/pages/home.vue'

import test from '@/components/common/navmenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sign_in',
      name: 'sign_in',
      component: SignIn
    },
    {
      path: '/sign_up',
      name: '/sign_up',
      component: SignUp
    },
    {
      path: '/home',
      name: 'home_page',
      component: HomePage

    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
