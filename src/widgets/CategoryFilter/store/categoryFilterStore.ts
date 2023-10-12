import { defineStore } from 'pinia';
import { getFiltersData } from '@/shared/api/WatchAMovieService';

interface CategoryFilterStoreSchema{
    genres: {
        id: number;
        text: string;
    }[] | null;
    countries: {
        id: number;
        text: string;
    }[] | null;
}

export const useCategoryFilterStore = defineStore('categoryFilterStore', {
    state: ():CategoryFilterStoreSchema => ({ 
        genres: null,
        countries: null,
     }),
    actions: {
      getFilterData() {
        getFiltersData()
        .then(res => {
            this.genres = res.genres.map(el => ({ id: el.id, text: el.genre })).filter(el => el.text);
            this.countries = res.countries.map(el => ({ id: el.id, text: el.country })).filter(el => el.text);
          });
      },
    },
  });