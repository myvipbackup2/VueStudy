<template>
    <div id="app">
        <button @click="increment">+</button>
        {{count}}
        <button @click="decrement">-</button>
    </div>
</template>

<script>
    import store from './store'
    export default {
        data () {
            return {
//                count: 0
            }
        },
        computed: {
            count(){
                return store.state.count
            }
        },
        methods: {
            increment(){
                ++this.count;
            },
            decrement(){
                --this.count;
            }
        }
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
