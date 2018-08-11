/**
 * Created by aurasix on 8/8/18.
 */

import Home from './components/site/Home.vue';
import CarsList from './components/cars/List.vue';


export const routes = [
  { path: '', component: Home },
  { path: '/cars', component: CarsList }
];
