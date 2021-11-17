import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Location from '../views/Location.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/location/:id',
    name: 'Location',
    component: Location,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
