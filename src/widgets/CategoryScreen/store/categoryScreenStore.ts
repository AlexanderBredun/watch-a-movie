
import request from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { watchAMovieService } from '@/shared/api/WatchAMovieService';
import type { FilterOrigin, ItemType, iCategoryItem, tFilters } from '@/shared/lib/types';
import { filterDefault } from '@/shared/lib/utils';



export const useCategoryScreenStore = defineStore('categoryScreenStore', () => {

    const page = ref(1);
    const loading = ref(false);
    const error = ref(false);
    const totalPages = ref(1);
    const filtersStored = ref<tFilters>(filterDefault);
    const items = ref<iCategoryItem[] | null>(null);


    function getCategoryItems(type: ItemType, filters?: tFilters) {
        loading.value = true;
        window.scrollTo(0,0);
        if(filters){
            filtersStored.value = filters;
            page.value = 1;
        }
        watchAMovieService.getItemsByFilter(page.value, type, filtersStored.value)
            .then(res => {
                items.value = res.items;
                totalPages.value = res.totalPages;
                loading.value = false;
            }).catch((err: Error) => {
                if (request.isAxiosError(err) && err.code === 'ERR_CANCELED') {
                    return;
                }
                error.value = true;
                loading.value = false;
            });
    }

    return {
        page,
        loading,
        error,
        totalPages,
        items,
        getCategoryItems,
    };
});