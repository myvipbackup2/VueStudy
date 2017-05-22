import Vue from 'vue'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App.vue'

Vue.use(VueMaterial)


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
