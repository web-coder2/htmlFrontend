import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AC1 from '../views/AC1.vue'
import AC2 from '../views/AC2.vue'
import Brotherhood from '../views/Brotherhood.vue'
import Revelations from '../views/Revelations.vue'
import Tester from '../views/Tester.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ac1',
      name: 'ac1',
      component: AC1
    },
    {
      path: '/ac2',
      name: 'ac2',
      component: AC2
    },
    {
      path: '/brotherhood',
      name: 'brotherhood',
      component: Brotherhood
    },
    {
      path: '/revelations',
      name: 'revelations',
      component: Revelations
    },
    {
      path: '/test',
      name: 'tester',
      component: Tester
    }
  ],
})

export default router