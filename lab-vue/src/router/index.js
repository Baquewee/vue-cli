import { createRouter, createWebHistory } from 'vue-router'
import Eventlist from '../views/Eventlist.vue'
import About from '../views/About.vue'
import Organizer from '../views/Organizer.vue'

const routes = [
  {
    path: '/',
    name: 'Eventlist',
    component: Eventlist
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Organizer',
    name: 'Organizer',
    component: Organizer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
