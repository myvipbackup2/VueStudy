<template>
    <md-toolbar>
        <md-button class="md-icon-button" @click.native="goBack">
            <
        </md-button>

        <h2 class="md-title" style="flex: 1">返回</h2>

        <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
        </md-button>
    </md-toolbar>
</template>

<style scoped>
    .arrow {
        width: 40px;
        height: 40px;
        background: url("../../assets/arrow.svg") no-repeat center;
    }
</style>

<script>
    export default {
        methods: {
            goBack(){
                window.history.go(-1);
            }
        }
    }
</script>