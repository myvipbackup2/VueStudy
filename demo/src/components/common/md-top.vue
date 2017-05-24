<template>
    <div>
        <md-toolbar id="header">
            <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
                <md-icon>menu</md-icon>
            </md-button>

            <h2 class="md-title" style="flex: 1">电影</h2>

            <md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
            </md-button>
        </md-toolbar>
        <md-sidenav class="md-left" ref="leftSidenav">
            <md-toolbar class="md-large">
                <div class="md-toolbar-container">
                    <h3 class="md-title">一个Vue2.0Demo</h3>
                </div>
            </md-toolbar>

            <p class="text">
                <span>Made BY Lizixiang</span>
                <br><br>
                点击访问<a href="http://www.lizixiang.cn">个人网站</a>
            </p>
        </md-sidenav>
    </div>
</template>

<style scope>
    #header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 3;
    }
    .text{
        padding-top: 50px;
    }
</style>

<script>
    export default{
        methods: {
            toggleLeftSidenav() {
                this.$refs.leftSidenav.toggle();
            },
            open(ref) {
                console.log('Opened: ' + ref);
            },
            close(ref) {
                console.log('关闭d: ' + ref);
            }
        }
    }
</script>