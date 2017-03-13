/**
 * Created by lizixiang on 2017/3/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        mutations
    }
})