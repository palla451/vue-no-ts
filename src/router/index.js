import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import { requireAuth } from '@/guards/authGuard';
// import { hideMenuItems } from '@/guards/navigationGuard';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true, hideLogin: true }, // Definisci una meta-proprietà per indicare che questa rotta richiede l'autenticazione
    beforeEnter: requireAuth, // Applica la guardia di navigazione alla rotta
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { requiresAuth: true, hideLogin: true }, // Definisci una meta-proprietà per indicare che questa rotta richiede l'autenticazione
    beforeEnter: requireAuth, // Applica la guardia di navigazione alla rotta
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/unauthorized',
    redirect: '/login' // Reindirizza alla pagina di login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
