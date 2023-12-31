import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
        state.user = user
    },
    logoff(state) {
      state.user = null
    },
  },
  actions: {
    setUser({ commit }, user) {
        commit('SET_USER', user)
      },
  },
  modules: {},
  plugins: [createPersistedState()],
})