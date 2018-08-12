/**
 * Created by aurasix on 8/8/18.
 */

import Home from './components/site/Home.vue';
import CarsList from './components/cars/List.vue';
import CarCreate from './components/cars/Create.vue';
import CarEdit from './components/cars/Edit.vue';
import CarView from './components/cars/View.vue';
import About from './components/site/About.vue';


export const routes = [
  { path: '', component: Home },
  { path: '/cars', component: CarsList },
  { path: '/car/create', component: CarCreate },
  { path: '/car/edit/:id', component: CarEdit },
  { path: '/car/view/:id', component: CarView },
  { path: '/about', component: About }
];
