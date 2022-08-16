import {Module} from 'vuex'

import tPreviews from '@/types/tPreviews.ts'
import RootState from '@/store/tRootState.ts'
import state from './modules/state'
import mutations from './modules/mutations'
import actions from './modules/actions'





const newMovies: Module<tPreviews, RootState> =  {
    namespaced: true,
    state,
    mutations,
    actions: actions('getNewCartoons'),
}

export default newMovies;
