/**
 * Created by aurasix on 8/8/18.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/site/Home.vue';
import CarsList from './components/cars/List.vue';
import CarCreate from './components/cars/Create.vue';
import CarEdit from './components/cars/Edit.vue';
import CarView from './components/cars/View.vue';
import About from './components/site/About.vue';
import Login from './components/site/Login.vue';
import Register from './components/site/Register.vue';

Vue.use(VueRouter);

const routes = [
  { path: '', name: 'home', component: Home },
  { path: '/cars', name: 'cars', component: CarsList, meta: { authOnly: true } },
  { path: '/car/create', component: CarCreate, meta: { authOnly: true } },
  { path: '/car/edit/:id', component: CarEdit, meta: { authOnly: true } },
  { path: '/car/view/:id', component: CarView, meta: { authOnly: true } },
  { path: '/about', component: About },
  { path: '/login', name: 'login', component: Login, meta: { guestOnly: true } },
  { path: '/register', component: Register, meta: { guestOnly: true } }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  var isLoggedIn = localStorage.getItem('cacheTokenId');

  if(to.meta.guestOnly && isLoggedIn) {
    next({ name: 'cars' })
  } else if(to.meta.authOnly && !isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }

})

export default router
