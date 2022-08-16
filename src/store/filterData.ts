import {Module} from 'vuex'
import request  from 'axios';
import tMovie from '@/types/tMovie.ts'
import RootState from '@/store/tRootState.ts'

import watchAMovieService from '@/services/WatchAMovieService.ts'

type ObjectStringsNums = {
    [key:string]: string | number;
}

interface tState {
    items: Array<ObjectStringsNums> | null
    loading: boolean
    error: boolean,
    page: number,
    totalPages: number,

}


const activeItem: Module<tState, RootState> =  {
    namespaced: true,
    state() {
        return {
            items: null,
            loading: true,
            error: false,
            page: 1,
            totalPages: 1,
        }

    },
    mutations: {
        SET_ITEMS (state, item) {
            state.items = item;
        },
        SET_LOADING (state, value) {
            state.loading = value
        },
        SET_ERROR (state, value) {
            state.error = value
        },
        SET_PAGE (state, value) {
            state.page = value
        },
        SET_TOTAL_PAGES (state, value) {
            state.totalPages = value
        },

    },
    actions: {

        async getFilterData({commit, state}, {filters, itemsType, origin}): Promise<any> {
            commit('SET_LOADING', true)
            await watchAMovieService[itemsType](state.page, filters, origin)
                .then(res => {
                    commit('SET_ITEMS', res.items)
                    commit('SET_TOTAL_PAGES', res.totalPages)
                    commit('SET_LOADING', false)
                }).catch((err: Error) => {
                    if (request.isAxiosError(err) && err.code === "ERR_CANCELED") {
                        return;
                    }
                    commit('SET_LOADING', false)
                    commit('SET_ERROR', true)
                    console.log(err);
                    return err;
                })


        },
    },

    modules: {
    }
}

export default activeItem;
