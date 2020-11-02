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

let collections = ['tests', 'devices', 'tags']

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
    devices: [],
    tags: [],
    plans: [],
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
    devices: state => {
      return state.devices
    },
    device_by_id: state => id => {
      return state.devices.find(device => device.id === id)
    },
    tags: state => {
      return state.tags
    },
    tag_by_id: state => id => {
      return state.tags.find(tag => tag.id === id)
    },
    plans: state => {
      return state.plans
    },
    plan_by_id: state => id => {
      return state.plans.find(plan => plan.id === id)
    },
  },
  mutations: {
    SET_TESTS: (state, tests) => {
      state.tests = tests
    },
    SET_DEVICES: (state, devices) => {
      state.devices = devices
    },
    SET_TAGS: (state, tags) => {
      state.tags = tags
    },
    SET_PLANS: (state, plans) => {
      state.plans = plans
    },
  },
  actions: {
    load_tests: async ({ commit }) => {
      const response = await _axios.get('tests')
      commit('SET_TESTS', response.data)
    },
    load_devices: async ({ commit }) => {
      const response = await _axios.get('devices')
      commit('SET_DEVICES', response.data)
    },
    load_tags: async ({ commit }) => {
      const response = await _axios.get('tags')
      commit('SET_TAGS', response.data)
    },
    load_plans: async ({ commit }) => {
      const response = await _axios.get('plans')
      commit('SET_PLANS', response.data)
    }
  }
})
