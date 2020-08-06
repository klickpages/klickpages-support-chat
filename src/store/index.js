import Vue from 'vue';
import Vuex from 'vuex';
import SupportChat from './supportChat';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    SupportChat,
  },
});
