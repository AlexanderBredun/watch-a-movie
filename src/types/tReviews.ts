export default interface tReviews {
    total: Total;
    items: Item[];
}

interface Item {
    kinopoiskId:    number;
    type:           Type;
    date:           Date;
    positiveRating: number;
    negativeRating: number;
    author:         string;
    title:          null | string;
    description:    string;
}

enum Type {
    Negative = "NEGATIVE",
    Neutral = "NEUTRAL",
    Positive = "POSITIVE",
}

interface Total {
    total:                number;
    totalPositiveReviews: number;
    totalNegativeReviews: number;
    totalNeutralReviews:  number;
    totalPages:           number;
}