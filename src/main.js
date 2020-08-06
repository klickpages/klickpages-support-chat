import Vue from 'vue';
import Notify from 'klicknotify';
import App from './App.vue';
import i18n from './i18n';
import store from './store';

Vue.config.productionTip = false;
Notify.init();

Vue.prototype.$notify = Notify;

new Vue({
  i18n,
  store,
  render: (h) => h(App),
}).$mount('#app');
