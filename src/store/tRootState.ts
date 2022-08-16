interface tFilterData {
    id:      number;
    country: string;
}

export default interface RootState {
    genres: null | Array<tFilterData>;
    countries: null;
    search: null | string

}