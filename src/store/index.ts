import Vuex, { StoreOptions} from 'vuex';

import {newCartoons, newSeries, newMovies} from '@/store/home'
import filterData from '@/store/filterData'

import RootState from '@/store/tRootState.ts'
import watchAMovieService from '@/services/WatchAMovieService.ts'
//import VuexPersister from 'vuex-persister'
import createPersistedState from 'vuex-persistedstate';
//
// const vuexPersister = new VuexPersister({
//   statesToPersist: ['featuredMovies', 'activeItem.item']
// })


const store: StoreOptions<RootState> = {
  state() {
   return {
      genres: null,
      countries: null,
      search: ''
   }
  },
  // plugins: [vuexPersister.persist],
  plugins: [createPersistedState({
    paths: ['genres', 'countries']
  })],
  mutations: {
    SET_GENRES(state, val){
      state.genres = val;
    },
    SET_COUNTRIES(state, val){
      state.countries = val;
    },
    SET_SEARCH(state, val){
      state.search = val;
    },
  },
  actions: {

    async getFilterData({commit, state}){
      if(state.genres && state.countries){
        return;
      }
      await watchAMovieService.getFiltersData()
          .then(res => {
            commit('SET_GENRES', res.genres.map(el => ({id: el.id, text: el.genre})).filter(el => el.text));
            commit('SET_COUNTRIES', res.countries.map(el => ({id: el.id, text: el.country})).filter(el => el.text));
          })
    }

  },
  getters: {
    //сделать геттер который вернет ссылку сразу
  },
  modules: {
    newMovies,
    newSeries,
    newCartoons,
    filterData
  }
}
export default new Vuex.Store<RootState>(store);