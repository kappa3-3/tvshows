import Vue from 'vue'
import Vuex from 'vuex'
import { resolveApiCall, generateGenresList, categorizeShows } from '../services/helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tvshows: [],
    genresList: [],
    categorizedShows: [],
    singleShow: {}
  },
  mutations: {
    SET_TVSHOWS (state, payload) {
      state.tvshows = payload
    },
    SET_GENRES (state, payload) {
      state.genresList = payload
    },
    SET_CATEGORIZED (state, payload) {
      state.categorizedShows = payload
    },
    SET_SINGLESHOW (state, payload) {
      state.singleShow = payload
    }
  },
  actions: {
    retrieveAllShows ({ commit, state }) {
      return resolveApiCall('http://api.tvmaze.com/shows')
        .then(response => {
          commit('SET_TVSHOWS', response)
          commit('SET_GENRES', generateGenresList(response))
          commit('SET_CATEGORIZED', categorizeShows(response, state.genresList))
        })
    },
    retrieveSingleShow ({ commit }, id) {
      return resolveApiCall(`http://api.tvmaze.com/shows/${id}`)
        .then(response => {
          commit('SET_SINGLESHOW', response)
        })
    }
  },
  getters: {
    getTvShow ({ tvshows }) {
      return id => tvshows.find(show => show.id.toString() === id.toString())
    },
    getSingleShow ({ singleShow }) {
      return singleShow
    },
    getTvShows ({ tvshows }) {
      return tvshows
    },
    getCategorisedShows ({ categorizedShows }) {
      return categorizedShows
    }
  }
})
