<template>
    <div id="app">
        <el-button @click="get">普通的按钮</el-button>

        <span>默认数据</span>

        <el-button type="primary">主要的按钮</el-button>

        <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
        <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>

        <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>

        <!--使用axio交互 发送ajax请求-->

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'app',
        data () {
            return {
                radio: '2'
            }
        },
        methods: {
            get(){
                alert(1);
            }
        }
    }
</script>

<style lang="scss">
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
