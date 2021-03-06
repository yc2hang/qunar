// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入reset.css
import 'styles/reset.css'

//引入border.css
import 'styles/border.css'

//引入iconfont
import 'styles/iconfont.css'

//解决300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body);

//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

import store from './store'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})