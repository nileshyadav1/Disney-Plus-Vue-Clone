import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from "vuex";
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import { computed } from '@vue/reactivity';
const store = useStore();
const User= computed(() => store.state.user );


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
   
    meta: { requiresLogin: true },
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: { requiresLogin: true },
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})





router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresLogin) && User === null
   
  ) {
   
    next({  name: 'Login',});
  } else {
    next();
  }
});

export default router
