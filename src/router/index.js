import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import page2 from '@/components/page2'
import page21 from '@/components/page21'
import page22 from '@/components/page22'
import page23 from '@/components/page23'
import page24 from '@/components/page24'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    // 重定向
    // {
    //   name: 'page2',
    //   path: '/page2',
    //   redirect: '/page31'
    // },
    {
      name: 'page2',
      path: '/page2',
      component: page2,
      children: [{
        path: '/page21',
        component: page21
      },
      {
        name: 'page22',
        path: '/page22',
        component: page22
      },
      {
        name: 'page23',
        path: '/page23',
        component: page23
      },
      {
        name: 'page24',
        path: '/page24',
        component: page24}
      ]
    }
  ]
})
