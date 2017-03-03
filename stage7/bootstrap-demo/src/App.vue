<template>
    <div id="app">
        <button class="btn btn-default">普通按钮</button>
        <button class="btn btn-danger">红色按钮</button>
        <div class="row">
            <div class="col-sm-8 my-border">8</div>
            <div class="col-sm-4 my-border">4</div>
        </div>
        <p>
            sss
        </p>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {}
        }
    }
</script>

<style scope lang="sass" rel="stylesheet/scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;

        .my-border {
            border: 1px solid red;
        }

    }


</style>
