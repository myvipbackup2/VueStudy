/**
 * Created by lizixiang on 2017/5/22.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Movie from '../components/movie/movie.vue'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/movie'
        },
        {
            path: '/movie',
            name: 'movie',
            component: Movie
        }
    ]
});