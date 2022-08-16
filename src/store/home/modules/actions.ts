import watchAMovieService from '@/services/WatchAMovieService.ts'

import { previewItemsPerPage } from '@/utils/constants.ts'

const actions = (method: string)=> {
    return {

        getItems({commit, state}): Promise<any> | undefined {
            if(state.page === 1 && state.slicedItems.length === previewItemsPerPage) return;

            commit('SET_LOADING', true)
            return new Promise((resolve, reject)=> {
               watchAMovieService[method](state.page)
                    .then(res => {
                        console.log(res);
                        commit('SET_ITEMS', res.items)
                        commit('SET_SLICED_ITEMS', state.items.slice(state.slicedItems.length, state.slicedItems.length+previewItemsPerPage))

                        commit('SET_TOTAL_ITEMS', res.total)
                    })
                    .catch((err: Error) => {
                        commit('SET_ERROR', true)
                        reject(err)
                    })
                    .finally(()=> commit('SET_LOADING', false))
            })


        },
        loadMoreItems({commit, state, dispatch}, itemsPerPage = 5){

            if(!state.items.length || (state.items.length === state.slicedItems.length)){
                commit('SET_PAGE', state.page+1)
                dispatch('getItems')
            }
            else{
                commit('SET_SLICED_ITEMS', state.items.slice(state.slicedItems.length, state.slicedItems.length+itemsPerPage))
            }
        }

    }
}

export default actions;