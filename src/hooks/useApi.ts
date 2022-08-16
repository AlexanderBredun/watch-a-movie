import watchAMovieService from '@/services/WatchAMovieService.ts'
import {ref, reactive, toRefs} from 'vue'
import tReviews from '@/types/tReviews.ts'


const useApi = async (method: string, ...args) => {

    const state = reactive({
        data: null,
        loading: true,
        error: null,

    });

    state.loading = true;

    await watchAMovieService[method](...args)
        .then(res => {
            state.data = res;
        })
        .catch(err => {
            state.error = err;
            state.data = null;
        })
        .finally(() => state.loading = false)

   
    return { 
        ...toRefs(state)
     }
}

export default useApi;