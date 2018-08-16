import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';
import { store } from './store';
import router from './router';

Vue.use(Vuelidate);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
