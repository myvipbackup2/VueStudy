import Vue from 'vue';
import Mint from 'mint-ui';
import App from './App.vue';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

new Vue({
    el: '#app',
    render: h => h(App)
});
