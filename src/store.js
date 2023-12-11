import { createStore } from 'vuex';

export default createStore({
  state: {
    fullName: 'пользователь',
  },
  mutations: {
    setFullName(state, userFullName) {
      state.fullName = userFullName;
    },
  },
  actions: {
    updateFullName({ commit }, userFullName) {
      commit('setFullName', userFullName);
    },
  },
  getters: {
    getFullName: (state) => state.fullName,
  },
});
