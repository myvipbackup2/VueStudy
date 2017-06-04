/**
 * Created by lizixiang on 2017/6/3.
 */

import * as types from './types'

export default{
    increment: ({commit}) => {
        commit(types.INCREMENT);
    },
    decrement: ({commit}) => {
        commit(types.DECREMENT);
    }

}