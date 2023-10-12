import type {
    AllFiltersNamesRaw,
    ItemType, MinMaxFilter,
    MovieBoxOffice, MovieDistribution,
    MovieFacts, MovieFactsExtracted, MovieSimilar, MovieSimilarItem,
    PersonMovies,
    iCategoryItem, tFilters, tItemPreviewRaw,
    tMovieExtracted,
    tPerson, tPersonRaw, tPreviewsExtracted, tPreviewsRaw, tReviews,
    tReviewsRaw, tStaffRaw
} from '../lib/types';
import {
    arrToString,
    formatDate,
    getCurrentYear,
    numWithSpaces,
    toHoursAndMinutes,
} from '../lib/utils';
import { $api } from './api';



interface FilersPropsHenerator {
    type: ItemType;
    country: string
    genre: string
    movieRating: MinMaxFilter
    movieYears: MinMaxFilter
    keyword: string
    page: number
}

const childsNumber = (num: number): string => {
    if (!num) return '';
    const lastChar = num.toString().slice(-1);
    const expls = {
        '1': 'ребенок',
        '2': 'ребенка',
        '3': 'ребенка',
        '4': 'ребенка',
    };

    return `<span class="fw-200">${num} ${expls[lastChar as keyof typeof expls] || 'детей'}</span>`;
};

const generateFilteredPath = ({ type, country, genre, movieRating, movieYears, keyword, page }: FilersPropsHenerator) => {
    return `/v2.2/films?${country}${genre}order=NUM_VOTE&type=${type}&ratingFrom=${movieRating.min}&ratingTo=${movieRating.max}&yearFrom=${movieYears.min}&yearTo=${movieYears.max}&${keyword}page=${page}`;
};



class WatchAMovieService {
    private aborter: Record<ItemType, AbortController> | Record<string, never> = {};

    async getItemsByFilter(page: number, type: ItemType, { keyword, movieYears, movieRating, movieGenre, movieCountry }: tFilters): Promise<tPreviewsExtracted> {
        if (this.aborter[type]) this.aborter[type].abort();
        this.aborter[type] = new AbortController();
        const signal = this.aborter[type].signal;
        const country = movieCountry ? `countries=${movieCountry}&` : '';
        const genre = type === 'MULT' ? 'genres=18&' : movieGenre ? `genres=${movieGenre}&` : '';
        const keywordTransformed = keyword ? `keyword=${keyword}&` : '';

        const path = generateFilteredPath({
            type: type === 'MULT' ? 'ALL' : type,
            country,
            genre,
            movieRating,
            movieYears,
            keyword: keywordTransformed,
            page
        });


        return await $api.get<tPreviewsRaw>(path, { signal })
            .then(response => {
                // If request is good...
                delete this.aborter[type];
                return { ...response.data, items: response.data.items.map(previewFormat) };
            });
    }
    
}

async function getMainMovies() {
      
    const f1 = $api.get<tPreviewsRaw>('/v2.2/films?order=NUM_VOTE&type=ALL&ratingFrom=8&ratingTo=10&yearFrom=1980&yearTo=2022&page=1');

    const f2 = $api.get<tPreviewsRaw>('/v2.2/films?order=NUM_VOTE&type=ALL&ratingFrom=8&ratingTo=10&yearFrom=1980&yearTo=2022&page=2');
    
    return await Promise.all([f1, f2]).then(function (response) {

        const formatedFilms = [
            ...response[0].data.items,
            ...response[1].data.items,
        ].map(previewFormat);
       
        return formatedFilms;
    });
}

async function getFiltersData() {
    return await $api.get<AllFiltersNamesRaw>('/v2.2/films/filters')
        .then(response => {
            // If request is good...
            return response.data;
        });
}



async function getActivePerson(id: string): Promise<tPerson> {
    return await $api.get<tPersonRaw>(`/v1/staff/${id}`)
        .then(response => {
            // If request is good...
            const {
                personId,
                posterUrl,
                nameRu,
                nameEn,
                sex,
                growth,
                birthday,
                death,
                age,
                birthplace,
                deathplace,
                spouses,
                profession,
                facts,
                films
            } = response.data;

            const formatSpouses = arrToString(spouses?.map(el => {
                return `<a href="/name/${el.personId}">${el.name} ${el.divorced ? el.divorcedReason : ''}</a> ${childsNumber(el.children)}`;
            }));

            const formatedFacts = facts?.map(el => ({ text: el })) || [];

            const filteredFilms = films?.map(itemPersonMovies);
          
            return {
                id: personId,
                image: posterUrl,
                nameRu,
                nameEn,
                facts: formatedFacts,
                films: filteredFilms,
                details: {
                    profession: {
                        title: 'Карьера',
                        value: profession
                    },
                    sex: {
                        title: 'Пол',
                        value: sex === 'MALE' ? 'Мужской' : 'Женский'
                    },

                    growth: {
                        title: 'Рост',
                        value: growth ? +growth / 100 + ' м.' : null
                    },
                    birthday: {
                        title: 'Дата рождения',
                        value: birthday ? `${formatDate(birthday)}${death ? '' : ' • ' + age + ' лет'}` : null
                    },
                    birthplace: {
                        title: 'Место рождения',
                        value: birthplace
                    },
                    death: {
                        title: 'Дата смерти',
                        value: death ? `${formatDate(death)} • ${age} лет}` : null
                    },

                    deathplace: {
                        title: 'Место смерти',
                        value: deathplace
                    },
                    spouses: {
                        title: sex === 'MALE' ? 'Супруга' : 'Супруг',
                        value: formatSpouses
                    },


                }
            };
        });
}

async function getNewItemsByType(page: number, type: ItemType): Promise<tPreviewsExtracted> {
    return await $api.get<tPreviewsRaw>(`/v2.2/films?${type === 'MULT' ? 'genres=18&' : ''}countries=1&order=NUM_VOTE&type=${type === 'MULT' ? 'ALL' : type}&ratingFrom=0&ratingTo=10&yearFrom=${getCurrentYear() - 1}&yearTo=${getCurrentYear()}&page=${page}`)
        .then(response => {
            // If request is good...
            return { ...response.data, items: response.data.items.map(previewFormat) };
        });
}

async function getMovieReview(id: number | string, page = 1): Promise<tReviews> {
    return await $api.get<tReviewsRaw>(`/v2.2/films/${id}/reviews?page=${page}&order=DATE_DESC`)
        .then(response => {
            const {
                total,
                totalPositiveReviews,
                totalNegativeReviews,
                totalNeutralReviews,
                totalPages,
                items
            } = response.data;
            return {
                total: {
                    total,
                    totalPositiveReviews,
                    totalNegativeReviews,
                    totalNeutralReviews,
                    totalPages
                },
                items
            };
        });
}

async function getMovieBasicInfo(id: string | number) {
    return await $api.get<tItemPreviewRaw>(`/v2.2/films/${id}`)
        .then(response => {
            return response.data;
        });
}

async function getActiveMovie(id: string | number): Promise<tMovieExtracted> {
    const f1 = getMovieBasicInfo(id);

    const f2 = $api.get<MovieBoxOffice>(`/v2.2/films/${id}/box_office`);
    const f3 = $api.get<MovieSimilar>(`/v2.2/films/${id}/similars`);
    const f4 = $api.get<MovieFacts>(`/v2.2/films/${id}/facts`);
    const f5 = $api.get<tStaffRaw[]>(`/v1/staff?filmId=${id}`);
    const f6 = $api.get<MovieDistribution>(`/v2.2/films/${id}/distributions`);
    


    return Promise.all([f1, f2, f3, f4, f5, f6]).then(function (response) {
        const movieInfo = response[0];
        const movieMoney = response[1].data;
        const movieSimilar = response[2].data;
        const movieFacts = response[3].data;
        const movieStaff = response[4].data;
        const moviePremier = response[5].data.items?.filter(el => el.type === 'WORLD_PREMIER').map(el => formatDate(el.date))[0];
       


        const budgetObj = movieMoney.items?.find(el => el.type === 'BUDGET');

        const budget = budgetObj ? numWithSpaces(budgetObj.amount) + ' ' + budgetObj.symbol : null;

        const gainMoneyObj = movieMoney.items?.find(el => el.type === 'WORLD');

        const gainMoney = gainMoneyObj ? numWithSpaces(gainMoneyObj.amount) + ' ' + gainMoneyObj.symbol : null;


        const facts = movieFacts.items?.filter(el => el.type === 'FACT');
        const bloopers = movieFacts.items?.filter(el => el.type === 'BLOOPER');

        const movieDirectors = arrToString(movieStaff.filter(el => el.professionKey === 'DIRECTOR')
            .map(el => {
                return `<a href="/name/${el.staffId}">${el.nameRu}</a>`;
            }));

        const movieActors = movieStaff.filter(el => el.professionKey === 'ACTOR');

        const ageLimit = movieInfo.ratingAgeLimits?.match(/\d+/gm);

        const itemFacts: MovieFactsExtracted = {
            itemFactsLength: facts.length + bloopers.length,
            facts,
            bloopers
        };

        const itemInfoAll: tMovieExtracted = {
            id: movieInfo.kinopoiskId,
            nameRu: movieInfo.nameRu,
            slogan: movieInfo.slogan,
            year: movieInfo.year,
            nameOriginal: movieInfo.nameOriginal,
            image: movieInfo.posterUrl,
            rating: movieInfo.ratingImdb || movieInfo.ratingKinopoisk,

            details: {
                countries: {
                    title: 'Страна',
                    value: arrToString(movieInfo.countries, 'country')
                },
                genres: {
                    title: 'Жанр',
                    value: arrToString(movieInfo.genres, 'genre')
                },
                movieDirectors: {
                    title: 'Режиссер',
                    value: movieDirectors
                },
                premier: {
                    title: 'Премьера в мире',
                    value: moviePremier
                },

                budget: {
                    title: 'Бюджет',
                    value: budget
                },
                gainMoney: {
                    title: 'Сборы в мире',
                    value: gainMoney
                },
                ratingAgeLimits: {
                    title: 'Возраст',
                    modificators: 'bordered',
                    value: ageLimit ? ageLimit[0] + '+' : null
                },

                filmLength: {
                    title: 'Время',
                    value: movieInfo.filmLength ? `${movieInfo.filmLength} мин. / ${toHoursAndMinutes(movieInfo.filmLength)}` : null
                },
            },
            description: movieInfo.description,
            itemSimilar: movieSimilar.items?.map(itemSimilarFormat),
            itemFacts,
            movieActors,
            
        };


        return itemInfoAll;
    });
}

const previewFormat = (i: tItemPreviewRaw): iCategoryItem => {
    const genresString = arrToString(i.genres, 'genre');
    return {
        id: i.kinopoiskId,
        img: i.posterUrlPreview,
        name: i.nameRu || i.nameOriginal || i.nameEn,
        year: i.year,
        type: genresString.includes('мультфильм') ? 'MULT' : i.type,
        rating: i.ratingKinopoisk || i.ratingImdb,
        genres: genresString
    };

};
const itemSimilarFormat = (i: MovieSimilarItem): iCategoryItem => {
    return {
        id: i.filmId,
        img: i.posterUrlPreview,
        name: i.nameRu || i.nameOriginal || i.nameEn,
    };
};
const itemPersonMovies = (el: PersonMovies): iCategoryItem => {
    return {
        id: el.filmId,
        name: el.nameRu || el.nameEn,
        img: ''
    };
};



export const watchAMovieService = new WatchAMovieService();

export{
    getMainMovies,
    getNewItemsByType,
    getFiltersData,
    getMovieReview,
    getActiveMovie,
    getActivePerson
};

