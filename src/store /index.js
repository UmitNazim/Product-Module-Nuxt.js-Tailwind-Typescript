import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import modules from './modules';

const store = () =>
  new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules,
  });

export default store;
