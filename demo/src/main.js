import Vue from 'vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import axios from 'axios'
import App from './App.vue'

/*注册主题*/
Vue.use(VueMaterial);
Vue.material.registerTheme({
    default: {
        primary: 'blue',
        accent: 'red',
        warn: 'red',
        background: 'white'
    },
    blue: {
        primary: 'blue',
        accent: 'red',
        warn: 'red',
        background: 'white'
    },
    teal: {
        primary: 'teal',
        accent: 'red',
        warn: 'red',
        background: 'white'
    },
    brown: {
        primary: 'brown',
        accent: 'red',
        warn: 'red',
        background: 'white'
    },
    indigo: {
        primary: 'indigo',
        accent: 'red',
        warn: 'red',
        background: 'white'
    },
    whiteForm: {
        primary: 'white',
        accent: 'deep-orange',
        warn: 'red',
        background: 'white'
    }

});

// axios配置
Vue.prototype.$http = axios; //其他页面在使用axios的时候直接  this.$http就可以了


new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
