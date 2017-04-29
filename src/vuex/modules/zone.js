import * as types from '../mutation-types'

const state = {
    articleInfo : {}
}

const mutations = {
    [types.Set_article_info] (state, data) {
        state.articleInfo = data;
    }
}

export default {
  state,
  mutations
}
