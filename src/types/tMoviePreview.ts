export default interface tMoviePreview {
    id: number
    img: string
    name: string
    year: string
    type: string
    rating: string
    genres: Array<{genre: string}>
}