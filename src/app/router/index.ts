import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView/ui/HomeView/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      if (savedPosition) {
        resolve(savedPosition);
      } else {
        resolve({ left: 0, top: 0 });
      }
    });

  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('@/views/MoviesView/ui/MoviesView/MoviesView.vue')
    },
    {
      path: '/cartoons',
      name: 'cartoons',
      component: () => import('@/views/CartoonsView/CartoonsView.vue')
    },
    {
      path: '/series',
      name: 'series',
      component: () => import('@/views/SeriesView/SeriesView.vue')
    },
    {
      path: '/lists',
      name: 'lists',
      component: () => import('@/views/ListsView/ListsView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/SearchView/SearchView.vue')
    },
    {
      path: '/film/:id',
      name: 'film',
      component: () => import('@/views/MovieView/MovieView.vue')
    },
    {
      path: '/name/:id',
      name: 'person',
      component: () => import('@/views/PersonView/PersonView.vue')
    },
    {
      path: '/watch/:id',
      name: 'watch',
      component: () => import('@/views/WatchView/WatchView.vue')
    },
  ]
});

export default router;
