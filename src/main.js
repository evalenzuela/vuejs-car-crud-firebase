import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import { routes } from './routes';

import axios from 'axios';

axios.defaults.baseURL = 'https://vue-cars-garage.firebaseio.com';

Vue.use(VueRouter);
Vue.use(Vuelidate);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
