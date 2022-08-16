import tMoviePreview from '@/types/tMoviePreview.ts'

export default interface tPreviews {
    items: Array<tMoviePreview>
    loading: boolean
    error: boolean
    page: number
    totalItems: number | null
    slicedItems: Array<tMoviePreview>
}