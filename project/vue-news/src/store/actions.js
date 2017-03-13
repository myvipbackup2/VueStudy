/**
 * Created by lizixiang on 2017/3/13.
 */
export default {
    showHeader: ({commit}) => {
        commit('showHeader')
    },
    hideHeader: ({commit}) => {
        commit('hideHeader')
    },
    showLoading: ({commit}) => {
        commit('showLoading')
    }
}