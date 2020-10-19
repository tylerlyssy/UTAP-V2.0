import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'
import _ from 'lodash'

const axiosConfig = {
  baseURL: '/api/v2',
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}

const _axios = axios.create(axiosConfig)

Vue.use(Vuex)
Vue.use(VueAxios, _axios)

export default new Vuex.Store({
  state: {
    pages: [
      { title: 'Dashboard', icon: 'view-dashboard' },
      { title: 'Plans', icon: 'source-branch' },
      { title: 'Tests', icon: 'clipboard-list-outline' },
      { title: 'Devices', icon: 'devices' },
      { title: 'Execution', icon: 'progress-clock' },
      { title: 'Tags', icon: 'tag-multiple' }
    ],
    user_pages: [
      { title: 'Admin', icon: 'cog' },
      { title: 'UserSettings', icon: 'account' }
    ],
    tests: [],
    tags: [],
  },
  getters: {
    pages: state => {
      return state.pages
    },
    user_pages: state => {
      return state.user_pages
    },
    tests: state => {
      return state.tests
    },
    test_by_id: state => id => {
      return state.tests.find(test => test.id === id)
    },
    tags: state => {
      return state.tags
    }
  },
  mutations: {
    SET_TESTS: (state, tests) => {
      state.tests = tests
    },
    SET_TAGS: (state, tags) => {
      state.tags = tags
    }
  },
  actions: {
    load_tests: async ({ commit }) => {
      const response = await _axios.get('tests')
      commit('SET_TESTS', response.data)
    },
    load_tags: async ({ commit }) => {
      const response = await _axios.get('tags')
      commit('SET_TAGS', response.data)
    }
  },
  modules: {
  }
})
