<template>
    <md-tabs md-fixed>
        <md-tab md-label="TOP250">
            <top250></top250>
        </md-tab>

        <md-tab md-label="正在热映">
            <p>人生的磨难是很多的，所以我们不可对于每一件轻微的伤害都过于敏感。在生活磨难面前，精神上的坚强和无动于衷是我们抵抗罪恶和人生意外的最好武器。 —— 洛克</p>
            <p>人生的磨难是很多的，所以我们不可对于每一件轻微的伤害都过于敏感。在生活磨难面前，精神上的坚强和无动于衷是我们抵抗罪恶和人生意外的最好武器。 —— 洛克</p>
        </md-tab>

        <md-tab md-label="即将上映">
            <p>人生并不像火车要通过每个站似的经过每一个生活阶段。人生总是直向前行走，从不留下什么。 —— 刘易斯</p>
        </md-tab>
    </md-tabs>
</template>

<style>

</style>

<script>
    import top250 from './move-top250.vue'
    export default{
        components: {
            top250
        }
    }
</script>