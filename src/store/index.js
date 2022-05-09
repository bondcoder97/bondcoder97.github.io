import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current_page: null
  },
  mutations: {
    set_current_page(state, current_page){
      if(!["Learn Roadmap", "Repositories Guide", "Skills Tracker", "Sources List", ""].includes(current_page)) return;
      state.current_page = current_page;
    }
  },
  actions: {
  },
  modules: {
  }
})
