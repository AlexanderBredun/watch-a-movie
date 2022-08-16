
export default interface tMovie {
    id:           number;
    nameRu:       null | string;
    slogan:       null | string;
    year:         null | number;
    nameOriginal: null | string;
    image:        string;
    rating:       null | number;
    details:      Details;
    description:  null | string;
    itemSimilar:  any[];

    itemFacts:    ItemFacts;
    movieActors:  MovieActor[];
    movieReviews: MovieReviews;
}

interface Details {
    countries:       Budget;
    genres:          Budget;
    movieDirectors:  Budget;
    premier:         Premier;
    budget:          Budget;
    gainMoney:       Budget;
    ratingAgeLimits: RatingAgeLimits;
    filmLength:      Budget;
}

interface Budget {
    title: string;
    value: null | string;
}

interface Premier {
    title: string;
}

interface RatingAgeLimits {
    title:        string;
    modificators: string;
    value:        null | string | number;
}

interface ItemFacts {
    itemFactsLength: number;
    facts:           any[];
    bloopers:        any[];
}

interface MovieActor {
    staffId:        number;
    nameRu:         string;
    nameEn:         string;
    description:    string;
    posterUrl:      string;
    professionText: string;
    professionKey:  string;
}

interface MovieReviews {
    total:                number;
    totalPages:           number;
    totalPositiveReviews: number;
    totalNegativeReviews: number;
    totalNeutralReviews:  number;
    items:                any[];
}
