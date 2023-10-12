export interface tReviews {
    total: Total;
    items: ItemReview[];
}

export interface ItemReview {
    kinopoiskId:    number;
    type:           ReviewsTypes;
    date:           string;
    positiveRating: number;
    negativeRating: number;
    author:         string;
    title:          null | string;
    description:    string;
}

export type ReviewsTypes = 'NEGATIVE' | 'NEUTRAL' | 'POSITIVE' | 'UNKNOWN'


interface Total {
    total:                number;
    totalPositiveReviews: number;
    totalNegativeReviews: number;
    totalNeutralReviews:  number;
    totalPages:           number;
}

export interface tReviewsRaw{
    total: number
    totalPages: number
    totalPositiveReviews: number
    totalNegativeReviews: number
    totalNeutralReviews: number
    items: ItemReview[]
}