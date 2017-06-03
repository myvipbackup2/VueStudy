/**
 * Created by lizixiang on 2017/6/3.
 */

import {INCREMENT, DECREMENT} from './types'
import getters from './getters'

const state = {
    count: 0
};

const mutations = {
    [INCREMENT](state){ //因为是变量所以要[]
        return state.count++;
    },
    [DECREMENT](state){ //因为是变量所以要[]
        return state.count--;
    }
};

export default{
    state,
    mutations,
    getters
}