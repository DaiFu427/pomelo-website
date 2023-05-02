import { createRouter, createWebHistory } from "vue-router";
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/HomeView.vue';
import Order from '@/views/OrderView.vue';

//Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
//const router = new VueRouter({
//  mode: 'history',
//  base: process.env.BASE_URL,
//  routes,
//});

export default router;
