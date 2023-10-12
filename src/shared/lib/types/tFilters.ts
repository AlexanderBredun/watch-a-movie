

export interface tFilters {
    keyword: string;
    movieYears: MinMaxFilter;
    movieRating: MinMaxFilter;
    movieGenre: string;
    movieCountry: string;
    defs: {
        movieYears: MinMaxFilter;
        movieRating: MinMaxFilter;
    }
}
export interface tFiltersWithDefs extends tFilters {
    keyword: string;
    
    movieYears: MinMaxFilter;
    movieRating: MinMaxFilter;
    movieGenre: string;
    movieCountry: string;
}

export interface MinMaxFilter{
    min: number,
    max: number,
}

export interface AllFiltersNamesRaw{
    genres: {
        id: number,
        genre: string
    }[];
    countries: {
        id: number,
        country: string
    }[];
}
