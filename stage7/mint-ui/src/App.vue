<template>
    <div id="app">
        <mt-header fixed title="饿了么"></mt-header>

        <mt-search v-model="value"></mt-search>

        <div class="mySwipe">
            <mt-swipe :auto="1000">
                <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
        </div>


        <mt-tabbar v-model="selected">
            <mt-tab-item id="外卖">
                <img slot="icon" src="./assets/logo.png">
                外卖
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" src="./assets/logo.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="./assets/logo.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="./assets/logo.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome lzx',
                value: '',
                selected: '订单'
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        .mySwipe{
            height: 200px;
            background-color: #42b983;
        }
        .slide1{
            color: red;
        }
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
