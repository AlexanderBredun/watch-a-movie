

export default interface tFilters {
    keyword: string;
    defs: Record<string, Record<string, number>>;
    movieYears: Record<string, number>;
    movieRating: Record<string, number>;
    movieGenre: string;
    movieCountry: string;
}