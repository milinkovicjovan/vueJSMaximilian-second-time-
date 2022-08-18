import counterMutations from './mutations.js';
import couunterActions from './actions.js';
import counterGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: couunterActions,
  getters: counterGetters,
};
