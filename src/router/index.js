import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SayingsView from '../views/SayingsView.vue'
import SayingDetailView from '../views/SayingDetailView.vue'
import AdminView from '../views/AdminView.vue'

const router = createRouter({
  // Hash history works on GitHub Pages without server config
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',            name: 'home',    component: HomeView },
    { path: '/sayings',     name: 'sayings', component: SayingsView },
    { path: '/sayings/:id', name: 'saying',  component: SayingDetailView, props: true },
    { path: '/admin',       name: 'admin',   component: AdminView }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
