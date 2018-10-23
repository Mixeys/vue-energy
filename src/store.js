import Vue from 'vue'
import Vuex from 'vuex'
import user from './store/modules/user'
import common from './store/modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    user,
    common
  }
})
