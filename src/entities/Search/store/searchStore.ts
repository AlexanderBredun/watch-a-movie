import request from 'axios';
import { defineStore } from 'pinia';
import { watchAMovieService } from '@/shared/api/WatchAMovieService';
import type { ItemType, iCategoryItem, tFilters } from '@/shared/lib/types';
import { filterDefault } from '@/shared/lib/utils';

interface SearchStoreSchema{
    search: string;
    loading: boolean;
    error: boolean;
    items: {
        [name in ItemType]?: iCategoryItem[]
    };
}

export const useSearchStore = defineStore('searchStore', {
    state: ():SearchStoreSchema => ({ 
        search: '',
        loading: true,
        items: {
            MULT: [],
            FILM: [],
            TV_SERIES: [],
        },
        error: false
     }),
    actions: {
      getItemsBySearch(type: ItemType) {
        this.loading = true;
        const filters: tFilters = JSON.parse(JSON.stringify(filterDefault));
       
        filters.keyword = this.search;
       
        watchAMovieService.getItemsByFilter(1, type, filters )
            .then(res => {
                this.items[type] = res.items;
                this.loading = false;
            }).catch((err: Error) => {
                if (request.isAxiosError(err) && err.code === 'ERR_CANCELED') {
                    return;
                }
                this.error = true;
                this.loading = false;
                return err;
            });
      },
    },
  });