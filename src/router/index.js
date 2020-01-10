import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import Experience from '../views/Experience.vue';
import Realisations from '../views/Realisations.vue';
import Diplomes from '../views/Diplomes.vue';
import Competences from '../views/Competences.vue';
import Interets from '../views/Interets.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience,
  },
  {
    path: '/realisations',
    name: 'realisations',
    component: Realisations,
  },
  {
    path: '/diplomes',
    name: 'diplomes',
    component: Diplomes,
  },
  {
    path: '/competences',
    name: 'competences',
    component: Competences,
  },
  {
    path: '/interets',
    name: 'interets',
    component: Interets,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
