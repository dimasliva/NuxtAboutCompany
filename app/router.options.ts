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
    {
      name: 'docs',
      path: '/docs',
      component: () => import('~/pages/DocsPage2/DocsPage.vue')
    },
    {
      name: 'forumTheme',
      path: '/forum/theme/:id',
      component: () => import('~/pages/ForumThemePage/ForumThemePage.vue')
    },
    {
      name: 'forumAuthor',
      path: '/forum/author/:id',
      component: () => import('~/pages/ForumAuthorPage/ForumAuthorPage.vue')
    },
    
  ],
} satisfies RouterConfig
