
import axios from 'axios';
import {
    getCurrentYear,
    numWithSpaces,
    arrToString,
    toHoursAndMinutes,
    formatDate,
} from '@/utils/utilsFuncs.ts'
import tFilters from '@/types/tFilters.ts'

const childsNumber = (num: number): string => {
    if(!num) return '';
    const lastChar = num.toString().slice(-1);
    const expls = {
        '1': 'ребенок',
        '2': 'ребенка',
        '3': 'ребенка',
        '4': 'ребенка',
    }

    return `<span class="fw-200">${num} ${expls[lastChar] || 'детей'}</span>`;
}

const generateFilteredPath = (type, country, genre, minRating, maxRating, minYear, maxYear, keyword, page)=> {
    return `/v2.2/films?${country}${genre}order=NUM_VOTE&type=${type}&ratingFrom=${minRating}&ratingTo=${maxRating}&yearFrom=${minYear}&yearTo=${maxYear}&${keyword}page=${page}`
}



class WatchAMovieService {
    private apiKey = process.env.VUE_APP_API_KEY;
    private baseUrl = 'https://kinopoiskapiunofficial.tech/api';
    private aborter: Record<string, AbortController> | Record<any, any>  = {};
    private instance = axios.create({
        baseURL: this.baseUrl,
        headers: {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
        }
      });


    async getMainMovies(){
        const f1 =  await this.instance.get('/v2.2/films?order=NUM_VOTE&type=ALL&ratingFrom=8&ratingTo=10&yearFrom=1980&yearTo=2022&page=1');

        const f2 =  await this.instance.get('/v2.2/films?order=NUM_VOTE&type=ALL&ratingFrom=8&ratingTo=10&yearFrom=1980&yearTo=2022&page=2');

        return Promise.all([f1, f2]).then(function(response) {

            const formatedFilms = [
                ...response[0].data.items,
                ...response[1].data.items,
            ].map(previewFormat);

            return formatedFilms
        });
    }

    async getNewMovies(page: number){
        return await this.instance.get(`/v2.2/films?countries=1&order=NUM_VOTE&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=${getCurrentYear() - 1}&yearTo=${getCurrentYear()}&page=${page}`)
            .then(response => {
            // If request is good...
            return {...response.data, items: response.data.items.map(previewFormat)};
        })
    }

    async getNewSeries(page: number){
        return await this.instance.get(`/v2.2/films?countries=1&order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=${getCurrentYear() - 1}&yearTo=${getCurrentYear()}&page=${page}`)
            .then(response => {
                // If request is good...
                return {...response.data, items: response.data.items.map(previewFormat)};
            })
    }
    async getNewCartoons(page: number){
        return await this.instance.get(`/v2.2/films?genres=18&order=NUM_VOTE&type=ALL&ratingFrom=8&ratingTo=10&yearFrom=${getCurrentYear() - 1}&yearTo=${getCurrentYear()}&page=${page}`)
            .then(response => {
                // If request is good...
                return {...response.data, items: response.data.items.map(previewFormat)};
            })
    }

    async filmsFilter(page: number, {keyword, movieYears: {min:minYear, max:maxYear}, movieRating: {min:minRating, max:maxRating}, movieGenre, movieCountry}, origin){
        if (this.aborter[origin]) this.aborter[origin].abort();
        this.aborter[origin]= new AbortController();
        const signal = this.aborter[origin].signal;

        
        const country = movieCountry ? `countries=${movieCountry}&` : '';
        const genre = movieGenre ? `genres=${movieGenre}&` : '';
        const keywordTransformed = keyword ? `keyword=${keyword}&` : '';

        const path = generateFilteredPath(
            'FILM',
            country,
            genre,
            minRating,
            maxRating,
            minYear,
            maxYear,
            keywordTransformed,
            page
            )

        return await this.instance.get(path, {signal})
            .then(response => {
                // If request is good...
                this.aborter[origin] = null;
                return {...response.data, items: response.data.items.map(previewFormat)};
            })
    }
    async seriesFilter(page: number, {keyword, movieYears: {min:minYear, max:maxYear}, movieRating: {min:minRating, max:maxRating}, movieGenre, movieCountry}, origin){
        if (this.aborter[origin]) this.aborter[origin].abort();
        this.aborter[origin]= new AbortController();
        const signal = this.aborter[origin].signal;


        const country = movieCountry ? `countries=${movieCountry}&` : '';
        const genre = movieGenre ? `genres=${movieGenre}&` : '';
        const keywordTransformed = keyword ? `keyword=${keyword}&` : '';

        const path = generateFilteredPath(
            'TV_SERIES',
            country,
            genre,
            minRating,
            maxRating,
            minYear,
            maxYear,
            keywordTransformed,
            page
            )

        return await this.instance.get(path, {signal})
            .then(response => {
                // If request is good...
                this.aborter[origin] = null;
                return {...response.data, items: response.data.items.map(previewFormat)};
            })
    }
    async cartoonsFilter(page: number, {keyword, movieYears: {min:minYear, max:maxYear}, movieRating: {min:minRating, max:maxRating}, movieGenre, movieCountry}, origin){
        if (this.aborter[origin]) this.aborter[origin].abort();
        this.aborter[origin]= new AbortController();
        const signal = this.aborter[origin].signal;


        const country = movieCountry ? `countries=${movieCountry}&` : '';
        const genre = `genres=18&`;
        const keywordTransformed = keyword ? `keyword=${keyword}&` : '';

        const path = generateFilteredPath(
            'ALL',
            country,
            genre,
            minRating,
            maxRating,
            minYear,
            maxYear,
            keywordTransformed,
            page
            )

        return await this.instance.get(path, {signal})
            .then(response => {
                // If request is good...
                this.aborter[origin] = null;
                return {...response.data, items: response.data.items.map(previewFormat)};
            })
    }

    async getFiltersData(){
        return await this.instance.get(`/v2.2/films/filters`)
            .then(response => {
                // If request is good...
                return response.data;
            })
    }
    async getMovieReview(id: number | string, page = 1){
        return await this.instance.get(`/v2.2/films/${id}/reviews?page=${page}&order=DATE_DESC`)
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
                }
            })
    }

    async getActivePerson(id){
        return await this.instance.get(`/v1/staff/${id}`)
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

                const formatSpouses = arrToString(spouses.map(el => {
                    return `<a href="/name/${el.personId}">${el.name} ${el.divorced ? el.divorcedReason : ''}</a> ${childsNumber(el.children)}`
                }));
                const formatedFacts = facts.map(el => ({text: el}))
                const filteredFilms = Object.values(films.reduce((acc, el)=> {
                    const alreadyHave = acc[el.filmId];
                    if(!alreadyHave){
                        acc[el.filmId] = el;
                    }
                    return acc;
                }, {}))

                return {
                    id: personId,
                    image: posterUrl,
                    nameRu,
                    nameEn,
                    facts: formatedFacts,
                    films: filteredFilms?.map(previewFormat),
                    details: {
                        profession: {
                            title:'Карьера',
                            value: profession
                        },
                        sex: {
                            title: 'Пол',
                            value: sex === 'MALE' ? 'Мужской' : 'Женский'
                        },

                        growth: {
                            title: 'Рост',
                            value: growth / 100 + ' м.'
                        },
                        birthday: {
                            title: 'Дата рождения',
                            value: `${formatDate(birthday)}${death ? '' :  ' • ' + age + ' лет'}`
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
            })
    }

    async getMovieBasicInfo(id){
        return await this.instance.get(`/v2.2/films/${id}`)
            .then(response => {
                return response.data;
            })
    }

    async getActiveMovie(id){
        const f1 =  this.getMovieBasicInfo(id);

        const f2 =  await this.instance.get(`/v2.2/films/${id}/box_office`);
        const f3 =  await this.instance.get(`/v2.2/films/${id}/similars`);
        const f4 =  await this.instance.get(`/v2.2/films/${id}/facts`);
        const f5 =  await this.instance.get(`/v1/staff?filmId=${id}`);
        const f6 =  await this.instance.get(`/v2.2/films/${id}/distributions`);
        const f7 =  this.getMovieReview(id);


        return Promise.all([f1, f2, f3, f4, f5, f6, f7]).then(function(response) {
            const movieInfo = response[0];
            const movieMoney = response[1].data;
            const movieSimilar = response[2].data;
            const movieFacts = response[3].data;
            const movieStaff = response[4].data;
            const moviePremier = response[5].data.items?.filter(el => el.type === 'WORLD_PREMIER').map(el => formatDate(el.date))[0];
            const movieReviews = response[6].total.total;


            const budgetObj = movieMoney.items?.find(el => el.type === 'BUDGET');

            const budget = budgetObj ? numWithSpaces(budgetObj.amount) + ' ' + budgetObj.symbol : null;

            const gainMoneyObj = movieMoney.items?.find(el => el.type === 'WORLD');

            const gainMoney = gainMoneyObj ? numWithSpaces(gainMoneyObj.amount) + ' ' + gainMoneyObj.symbol : null;


            const facts = movieFacts.items?.filter(el => el.type === 'FACT');
            const bloopers = movieFacts.items?.filter(el => el.type === 'BLOOPER');

            const movieDirectors = arrToString(movieStaff.filter(el => el.professionKey === 'DIRECTOR')
                .map(el => {
                    return `<a href="/name/${el.staffId}">${el.nameRu}</a>`
                }));

            const movieActors = movieStaff.filter(el => el.professionKey === 'ACTOR');

            const ageLimit = movieInfo.ratingAgeLimits?.match(/\d+/gm);

            const itemFacts = {
                itemFactsLength: facts.length + bloopers.length,
                facts,
                bloopers
            };

            const itemInfoAll = {
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
                        value: ageLimit ? ageLimit[0]+'+' : null
                    },

                    filmLength: {
                        title: 'Время',
                        value: movieInfo.filmLength ? `${movieInfo.filmLength} мин. / ${toHoursAndMinutes(movieInfo.filmLength)}` : null
                    } ,
                },
                description: movieInfo.description,
                itemSimilar: movieSimilar.items?.map(previewFormat),
                itemFacts,
                movieActors,
                movieReviews
            };


            return itemInfoAll
        });
    }
}

const previewFormat = (i: any)=> {
    return {
        id: i.kinopoiskId || i.filmId,
        img: i.posterUrlPreview,
        name: i.nameRu || i.nameOriginal || i.nameEn,
        year: i.year,
        type: i.type,
        rating: i.ratingKinopoisk || i.ratingImdb || i.rating,
        genres: arrToString(i.genres, 'genre')
    }

}
const activeItemFormat = (i: any)=> {
    return {
        id: i.kinopoiskId,
        img: i.posterUrlPreview,
        name: i.nameRu || i.nameOriginal,
        year: i.year,
        type: i.type,
        rating: i.ratingImdb || i.ratingKinopoisk,
        genres: arrToString(i.genres, 'genre')
    }

}
const reviewsFormat = (i: any)=> {
    return {
        total: {
            total: i.total,
            totalPositiveReviews: i.totalPositiveReviews,
            totalNegativeReviews: i.totalNegativeReviews,
            totalNeutralReviews: i.totalNeutralReviews
        },
        items: i.items
    }

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
}

const instance = new WatchAMovieService();
export default instance;

export {
    filterDefault
}