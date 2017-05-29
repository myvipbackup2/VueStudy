/**
 * Created by lizixiang on 2017/5/22.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Movie from '../components/movie/movie.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes: [
        {
            path: '/',
            redirect: '/movie'
        },
        {
            path: '/movie',
            name: 'movie',
            component: Movie
        },
        {
            path: '/music',
            name: 'music'
        },
        {
            path: '/book',
            name: 'book'
        },
        {
            path: '/photo',
            name: 'photo'
        }
    ]
});