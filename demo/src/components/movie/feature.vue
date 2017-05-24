<template>
    <div>
        <md-list class="custom-list md-triple-line">
            <md-list-item v-for="movie in movieLists">
                <md-avatar>
                    <img :src="movie.images.large" alt="People">
                </md-avatar>

                <div class="md-list-text-container">
                    <span>{{movie.title}}</span>
                    <span>类型：{{movie.genres}}</span>
                    <p>
                        <span>{{movie.year}}年</span> 平均分：{{movie.rating.average}}分
                    </p>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">star</md-icon>
                </md-button>

                <md-divider class="md-inset"></md-divider>
            </md-list-item>

        </md-list>
        <md-spinner :md-size="60" md-indeterminate v-show='isSpinning'></md-spinner>
    </div>
</template>

<script>

    export default{
        data(){
            return {
                movieLists: [],
                isSpinning: true
            }
        },
        mounted(){
            this.$http.get(API_PROXY + 'https://api.douban.com/v2/movie/coming_soon?count=10&start=0')
                .then((res) => {
                    this.movieLists = res.data.subjects;
                    this.isSpinning = false; //加载完成，loading消失
                });
        }
    }

</script>