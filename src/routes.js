/**
 * Created by aurasix on 8/8/18.
 */

import Home from './components/site/Home.vue';
import CarsList from './components/cars/List.vue';
import CarCreate from './components/cars/Create.vue';
import About from './components/site/About.vue';


export const routes = [
  { path: '', component: Home },
  { path: '/cars', component: CarsList },
  { path: '/car/create', component: CarCreate },
  { path: '/about', component: About }
];
