import type { RouterConfig } from '@nuxt/schema'

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/HomePage/HomePage.vue')
    },
    {
      name: 'contact',
      path: '/contact',
      component: () => import('~/pages/ContactPage/ContactPage.vue')
    },
    {
      name: 'forum',
      path: '/forum',
      component: () => import('~/pages/ForumPage/ForumPage.vue')
    },
  ],
} satisfies RouterConfig
