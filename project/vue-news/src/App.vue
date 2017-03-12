<template>
    <div id="app">
        <NavView></NavView>
        <router-view></router-view>
        <FooterView></FooterView>
    </div>
</template>

<script>
    import NavView from './components/Nav.vue';
    import FooterView from './components/Footer.vue';
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            NavView,
            FooterView,
            Home,
        }
    }
</script>

<style>
    @import "./assets/css/index.css";
</style>
