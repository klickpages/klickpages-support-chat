import KlickpagesSupportChat from '@/components/SupportChat/Main.vue';
import SupportChat from './store/supportChat';

export default {
  install(Vue, options) {
    if (!options || !options.store) {
      throw new Error('Please initialize plugin with a Vuex store.');
    }

    options.store.registerModule('SupportChat', SupportChat);

    Vue.component('klickpages-support-chat', KlickpagesSupportChat);
  },
};
