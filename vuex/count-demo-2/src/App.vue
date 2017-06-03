<template>
    <div id="app">
        <button @click="increment">+</button>
        {{count}}
        <button @click="decrement">-</button>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'Vuex'
    export default {
        data () {
            return {}
        },
        computed: mapGetters([
            'count'
        ]),
        methods: mapActions([
            'increment',
            'decrement'
        ])
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
