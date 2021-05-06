import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tvshows: []
  },
  mutations: {
    setTvShow (state, payload) {
      state.tvshows.push(payload)
    }
  },
  actions: {
    setTvShow (state, payload) {
      state.commit('setTvShow', payload)
    }
  },
  modules: {
  },
  getters: {
    getTvShow: ({ tvshows }) => id => tvshows.find(show => show.id.toString() === id.toString())
  }
})
