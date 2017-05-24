<template>
    <div>
        <md-list class="custom-list md-triple-line">
            <md-list-item v-for="movie in movieLists" @click.native="ss">
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
                isSpinning: true,
                srcContainer: null,
                isBusy: false
            }
        },
        mounted(){
            /*            this.$http.get(API_PROXY + 'https://api.douban.com/v2/movie/top250?count=10&start=0')
             .then((res) => {
             this.movieLists = res.data.subjects;
             this.isSpinning = false;
             });*/
            this.srcContainer = this.$el;
            this.loadMore(); //使用loadMore初始化数据
            this.srcContainer.addEventListener('scroll', (e) => {
                console.log('scrolling');//没用
                if (this.isTouchScreenBtm(e)) {

                }
            })
        },
        methods: {
            loadMore() {
                if (this.busy) return;
                let start = this.movieLists.length;
                this.busy = true;
                this.isSpinning = true;
                this.$http.get(API_PROXY + 'https://api.douban.com/v2/movie/top250?count=10&start=' + start)
                    .then((res) => {
                        this.movieLists = res.data.subjects;
                        this.isSpinning = false;
                        this.busy = false;
                    }).catch(function (error) {
                    console.log(error);
                });
            },
            isTouchScreenBtm() {//判断是否到底部的函数

            },
            ss(){
                alert(1);
            }
        }
    }

</script>