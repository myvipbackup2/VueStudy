<template>
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
        <md-toolbar class="md-large">
            <div class="md-toolbar-container">
                <h3 class="md-title">一个Vue2.0Demo</h3>
            </div>
        </md-toolbar>

        <p>
            <a href="http://www.lizixiang.cn">个人网站</a>
        </p>
    </md-sidenav>
</template>

<script>
    export default {
        methods: {
            open(ref) {
                console.log('Opened: ' + ref);
            },
            close(ref) {
                console.log('关闭d: ' + ref);
            }
        }
    };
</script>