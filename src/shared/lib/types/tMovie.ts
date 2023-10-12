import type { Country, DetailsItem, iCategoryItem } from './common';
import type { tStaffRaw } from './tPerson';

export interface tMovie {
    id: number;
    nameRu: null | string;
    slogan: null | string;
    year: null | number;
    nameOriginal: null | string;
    image: string;
    rating: null | number;
    details: Details;
    description: null | string;
    itemSimilar: any[];

    itemFacts: ItemFacts;
    movieActors: MovieActor[];
    movieReviews: MovieReviews;
}

export interface tMovieExtracted {
    id: number;
    nameRu: string | null;
    slogan?: string | null;
    year: number | null;
    nameOriginal: string | null;
    image: string;
    rating: number | null;
    details: {
        countries: DetailsItem
        genres: DetailsItem
        movieDirectors: DetailsItem
        premier: DetailsItem
        budget: DetailsItem
        gainMoney: DetailsItem
        ratingAgeLimits: DetailsItem
        filmLength: DetailsItem
    }
    description?: string | null;
    itemSimilar: iCategoryItem[]
    itemFacts: MovieFactsExtracted
    movieActors: tStaffRaw[]
    
}

export interface MovieBoxOffice {
    total: number;
    items: {
        type: string;
        amount: number;
        currencyCode: string;
        name: string;
        symbol: string;
    }[]
}


export interface MovieSimilarItem {
    filmId: number
    nameRu: string | null
    nameEn: string | null
    nameOriginal: string | null
    posterUrl: string
    posterUrlPreview: string
    relationType: string
}
export interface MovieSimilar {
    total: number;
    items: MovieSimilarItem[]
}
export interface MovieFacts {
    total: number;
    items: {
        text: string;
        type: 'FACT' | 'BLOOPER';
        spoiler: boolean
    }[]
}
export interface MovieFactsSingleItem {
    text: string;
    type?: 'FACT' | 'BLOOPER';
    spoiler?: boolean;
}
export interface MovieFactsExtracted{
    itemFactsLength: number;
    facts: MovieFactsSingleItem[];
    bloopers: MovieFactsSingleItem[];
}

export interface MovieDistribution {
    total: number;
    items: {
        type: 'LOCAL' | 'COUNTRY_SPECIFIC' | 'PREMIERE' | 'ALL' | 'WORLD_PREMIER';
        subType: 'CINEMA' | 'DVD' | 'DIGITAL' | 'BLURAY' | null;
        date: string | null
        reRelease: boolean | null
        country: Country
        companies: { name: string }[]
    }[]
}

interface Details {
    countries: DetailsItem;
    genres: DetailsItem;
    movieDirectors: DetailsItem;
    premier: Premier;
    budget: DetailsItem;
    gainMoney: DetailsItem;
    ratingAgeLimits: RatingAgeLimits;
    filmLength: DetailsItem;
}


interface Premier {
    title: string;
}

interface RatingAgeLimits {
    title: string;
    modificators: string;
    value: null | string | number;
}

interface ItemFacts {
    itemFactsLength: number;
    facts: any[];
    bloopers: any[];
}

interface MovieActor {
    staffId: number;
    nameRu: string;
    nameEn: string;
    description: string;
    posterUrl: string;
    professionText: string;
    professionKey: string;
}

interface MovieReviews {
    total: number;
    totalPages: number;
    totalPositiveReviews: number;
    totalNegativeReviews: number;
    totalNeutralReviews: number;
    items: any[];
}
