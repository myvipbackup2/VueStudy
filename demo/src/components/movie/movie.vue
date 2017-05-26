<template>
    <div>
        <md-top></md-top>
        <movie-tab></movie-tab>
        <md-bottom></md-bottom>
    </div>
</template>

<script>
    import mdBottom from '../common/md-bottom.vue'
    import mdTop from '../common/md-top.vue'
    import movieTab from '../movie/movie-nav.vue'
    export default {
        components: {
            mdBottom,
            mdTop,
            movieTab,
        }
    }
</script>