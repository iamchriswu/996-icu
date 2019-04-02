import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/zh_CN',
      name: 'zh_CN',
      component: () => import('../views/Zh_CN')
    },
    {
      path: '/de_DE',
      name: 'de_DE',
      component: () => import('../views/De_DE')
    },
    {
      path: '/en_US',
      name: 'en_US',
      component: () => import('../views/En_US')
    },
    {
      path: '/es_MX',
      name: 'es_MX',
      component: () => import('../views/Es_MX')
    },
    {
      path: '/fr_FR',
      name: 'fr_FR',
      component: () => import('../views/Fr_FR')
    },
    {
      path: '/it_IT',
      name: 'it_IT',
      component: () => import('../views/It_IT')
    },
    {
      path: '/ja_JP',
      name: 'ja_JP',
      component: () => import('../views/Ja_JP')
    },
    {
      path: '/ru_RU',
      name: 'ru_RU',
      component: () => import('../views/Ru_RU')
    },
    {
      path: '/*',
      redirect: '/zh_CN'
    }
  ]
})
