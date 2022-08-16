import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import qs from 'qs';
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import Person from '../views/Person.vue'
import Watch from '../views/Watch.vue'
import Movies from '../views/Movies.vue'
import Series from '../views/Series.vue'
import Cartoons from '../views/Cartoons.vue'
import Lists from '../views/Lists.vue'
import Search from '../views/Search.vue'
import NotFound from '../views/NotFound.vue'





const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  
  },
  {
    path: '/film/:id',
    name: 'Movie',
    component: Movie,

  },
  {
    path: '/name/:id',
    name: 'Person',
    component: Person,

  },
  {
    path: '/watch/:id',
    name: 'Watch',
    component: Watch,

  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,

  },
  {
    path: '/series',
    name: 'Series',
    component: Series,

  },
  {
    path: '/cartoons',
    name: 'Cartoons',
    component: Cartoons,

  },
  {
    path: '/lists',
    name: 'Lists',
    component: Lists,

  },
  {
    path: '/search',
    name: 'Search',
    component: Search,

  },
  {
    path: '/film',
    redirect: '/movies'
  },
  { path: "/:pathMatch(.*)*", component: NotFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ left: 0, top: 0 })
        }

      }, 500)
    })

  },
})




export default router
