import type { eListsHighlight } from '../utils';

export interface DetailsItem {
    title: string;
    modificators?: 'bordered';
    value: null | string;
}

export interface iCategoryItem {
    id: number
    img: string
    name: string | null
    year?: number | null
    type?: ItemType
    rating?: number | null
    genres?: string | null;
}

export type ItemProccessType = 'FILMING' | 'PRE_PRODUCTION' | 'COMPLETED' | 'ANNOUNCED' | 'UNKNOWN' | 'POST_PRODUCTION';
export type ItemType = 'FILM' | 'MINI_SERIES' | 'TV_SERIES' | 'VIDEO' | 'MULT' | 'ALL';


export interface Country {
    country: string;
}

export interface Genre {
    genre: string;
}

type Partial<T> = {
    [key in keyof T]?: T[key];
  };

export type FilterOrigin = 'FILM' | 'TV_SERIES' | 'ALL';
export type PersonGender = 'MALE' | 'FEMALE';

export interface SelectOption{
    id: number | string;
    text: string;
}

export interface InputSliderReturnValue{
    maxValue: number;
    minValue: number;
}

export type tListshIghlight =`${eListsHighlight}`;