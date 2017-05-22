<template>
    <div>
        <mdTop></mdTop>
        <movieNav></movieNav>
        <mdBottom></mdBottom>
    </div>
</template>

<script>
    import mdBottom from '../common/md-bottom.vue'
    import mdTop from '../common/md-top.vue'
    import movieNav from '../movie/movie-nav.vue'
    export default {
        components: {
            mdBottom,
            mdTop,
            movieNav
        }
    }
</script>