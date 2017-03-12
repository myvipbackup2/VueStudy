/**
 * Created by lizixiang on 2017/3/12.
 */
import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'


export default [
    {
        path: './home',
        components: Home
    },
    {
        path: './follow',
        components: Follow
    },
    {
        path: './column',
        components: Column
    },
    {
        path: './user-info',
        components: UserInfo
    },
]