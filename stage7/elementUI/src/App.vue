<template>
    <div id="app">

        {{msg}}
        <br>

        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <div class="block">
            <span class="demonstration">默认显示颜色</span>
            <span class="wrapper">
                <el-button icon="close" type="success">成功按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="info">信息按钮</el-button>
          </span>
        </div>
        <div class="block">
            <span class="demonstration">hover 显示颜色</span>
            <span class="wrapper">
                <el-button :plain="true" type="success">成功按钮</el-button>
                <el-button :plain="true" type="warning">警告按钮</el-button>
                <el-button :plain="true" type="danger">危险按钮</el-button>
                <el-button :plain="true" type="info">信息按钮</el-button>
            </span>
        </div>

        <el-button type="primary" :loading="true">加载中</el-button>

        <el-button-group>
            <el-button type="primary" icon="arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>

        <el-button-group>
            <el-button type="primary" icon="edit"></el-button>
            <el-button type="primary" icon="share"></el-button>
            <el-button type="primary" icon="delete"></el-button>
        </el-button-group>


        <span class="el-icon-loading"></span>

        <el-row>
            <el-col :span="12">
                <Date>1</Date>
            </el-col>
            <el-col :span="12">
                <Date>3</Date>
            </el-col>
        </el-row>



    </div>
</template>

<script>
    import Date from './components/Date.vue'
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            Date
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
        .block {
            margin: 20px;
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
