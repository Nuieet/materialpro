import { createStore } from 'vuex'

export default createStore({
  state: {
    active:0
  },

  getters: {
    get: state => state.active
  },
  mutations: {
    set(state,active){
      state.active = active;
  },
  },
  actions: {
  },
  modules: {
  }
})
