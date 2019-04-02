// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'github-markdown-css'

import LanguageMenu from './components/LanguageMenu'
import Star from './components/Star'
import Logo from './components/Logo'

Vue.component('LanguageMenu', LanguageMenu)
Vue.component('Star', Star)
Vue.component('Logo', Logo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
