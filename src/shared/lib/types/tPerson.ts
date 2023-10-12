import type { DetailsItem, PersonGender, iCategoryItem } from './common';
import type { MovieFactsSingleItem } from './tMovie';

export interface tPerson {
    id:  number;
    image?: string | null;
    nameRu?:    string | null;
    nameEn?:    string | null;
    facts?:     MovieFactsSingleItem[] | null;
    films?:     iCategoryItem[];
    details:   {
        profession: DetailsItem;
        sex:        DetailsItem;
        growth:     DetailsItem;
        birthday:   DetailsItem;
        birthplace: DetailsItem;
        death:      DetailsItem;
        deathplace: DetailsItem;
        spouses:    DetailsItem;
    };
}

export interface tPersonRaw{
    personId: number;
    webUrl: string | null;
    nameRu: string | null;
    nameEn: string | null;
    sex: PersonGender;
    posterUrl: string;
    growth: string | null;
    birthday: string | null;
    death: string | null;
    age: string | null;
    birthplace: string | null;
    deathplace: string | null;
    hasAwards: number | null;
    facts: string[] | null;
    spouses: {
        personId: number
        name: string | null
        divorced: boolean
        divorcedReason: string | null
        sex: PersonGender
        children: number
        webUrl: string
        relation: string
    }[] | null;
    films: PersonMovies[]
    profession: string | null;
}

export interface PersonMovies{
    filmId: number
    nameRu: string | null
    nameEn: string | null
    rating: string | null
    description: string | null
    general: boolean
    professionKey: string
}

export interface tStaffRaw{
    'staffId': number,
    'nameRu': string | null,
    'nameEn': string | null,
    'description': string | null,
    'posterUrl': string,
    'professionText': string,
    'professionKey': string
}



interface Film {
    id: number;
    name:   string | null;
    genres:  string;
}


