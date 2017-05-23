<template>
    <md-tabs md-fixed>
        <md-tab md-label="TOP250">
            <top250></top250>
        </md-tab>

        <md-tab md-label="正在热映">
            <hot></hot>
        </md-tab>

        <md-tab md-label="即将上映">
            <feature></feature>
        </md-tab>
    </md-tabs>
</template>

<style>
    .md-whiteframe.md-tabs-navigation.md-whiteframe-0dp.md-has-label.md-fixed.md-centered {
        position: fixed;
        top: 64px;
        z-index: 3;
        width: 100%;
    }

    .md-tabs-content {
        margin: 100px 0 50px;
    }

    .md-theme-default.md-tabs > .md-tabs-navigation .md-tab-indicator {
        background-color: #333;
    }
</style>

<script>
    import top250 from './top250.vue'
    import hot from './hot.vue'
    import feature from './feature.vue'
    export default{
        components: {
            top250,
            hot,
            feature
        }
    }
</script>