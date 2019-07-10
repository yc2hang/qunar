// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入reset.css
import './assets/styles/reset.css'

//引入border.css
import './assets/styles/border.css'

//引入iconfont
import './assets/styles/iconfont.css'

//解决300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})