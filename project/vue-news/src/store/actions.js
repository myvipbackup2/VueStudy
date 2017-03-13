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
    showFooter: ({commit}) => {
        commit('showFooter')
    },
    hideFooter: ({commit}) => {
        commit('hideFooter')
    },
    showLoading: ({commit}) => {
        commit('showLoading')
    },
    hideLoading: ({commit}) => {
        commit('hideLoading')
    }
}