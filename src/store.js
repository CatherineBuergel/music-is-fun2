import Vue from 'vue'
import Vuex from 'vuex'
import Song from '../models/Song.js';
import $ from 'jquery'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: {},
    activeSong: {}
  },
  mutations: {
    setResults(state, data) {
      let dict = {}
      data.forEach(s => {
        if (dict[s.artist]) {
          dict[s.artist].push(s)
        } else {
          dict[s.artist] = [s]
        }
      })
      state.results = dict
      console.log(state.results)
    },
    setActiveSong(state, data) {
      state.activeSong = data
    }
  },
  actions: {
    getMusicApi({ commit }, artist) {
      var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
      $.getJSON(url)
        .then(res => {
          let data = res.results.map(s => new Song(s))
          commit('setResults', data)
        })
        .catch(err => console.log(err))
    },

    changeActiveSong({ commit, dispatch }, song) {
      commit('setActiveSong', song)
    }
  }
})
