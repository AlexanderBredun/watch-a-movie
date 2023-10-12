import type { tFilters } from '../types';
import type { tFiltersWithDefs } from '../types/tFilters';
import { getCurrentYear } from './utilsFuncs';

const allItemsPerPage = 20;
const previewItemsPerPage = 5;

enum STORAGE_KEYS {
    HERO_BLOCK = 'heroBlock',
};

enum eListsHighlight{
    FAVORITE = 'favorite',
    WATCH_LATER = 'watchLater',
}

const filterDefault: tFilters = {
    keyword: '',
    defs: {
        movieYears: {
            min: 1870,
            max: getCurrentYear(),
        },
        movieRating: {
            min: 1,
            max: 10,
        },
    },
    movieYears: {
        min: 1960,
        max: getCurrentYear(),
    },
    movieRating: {
        min: 1,
        max: 10,
    },
    movieGenre: '',
    movieCountry: '',
};

export {
    allItemsPerPage,
    previewItemsPerPage,
    filterDefault,
    STORAGE_KEYS,
    eListsHighlight,
};