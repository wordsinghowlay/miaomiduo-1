import * as types from '../mutation-types'

const state = {
    mallBannerList : []
}

const mutations = {
    [types.Set_banner_list] (state,amount) {
        if(amount.type=='mall'){
            state.mallBannerList = amount.data;
        }
    }
}


export default {
  state,
  mutations
}
