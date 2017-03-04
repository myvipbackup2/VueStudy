<template>
    <div id="app">
        <el-button :loading=bFlag @click="get">获取数据</el-button>

        <span>{{msg}}</span>

        <hr>

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
                radio: '2',
                msg: '没有数据...',
                bFlag: false
            }
        },
        mounted(){
            //上来刷新页面就请求数据，mounted是生命周期
//            this.get();
        },
        methods: {
            get(){
                this.bFlag = !this.bFlag;
                axios.get('//api.github.com/users/myvipbackup2')
                    .then(function (response) {
//                        console.log(response);
                        this.msg = response.data.login;
                        if (this.msg != '没有数据...') {
                            this.bFlag = !this.bFlag;
                        }
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
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
