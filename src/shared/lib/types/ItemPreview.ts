import type { Country, Genre, ItemType } from './common';

export interface tItemPreviewRaw {
    kinopoiskId:      number;
    imdbId:           null | string;
    nameRu:           string | null;
    nameEn:           null | string;
    nameOriginal:     null | string;
    countries:        Country[];
    genres:           Genre[];
    ratingKinopoisk:  number | null;
    ratingImdb:       number | null;
    year:             number | null;
    type:             ItemType;
    posterUrl:        string;
    posterUrlPreview: string;
    ratingAgeLimits?: string | null;
    slogan?: string | null;
    description?: string | null;
    filmLength?: number | null;
}


