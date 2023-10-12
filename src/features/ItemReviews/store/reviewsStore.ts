import { defineStore } from 'pinia';
import { getMovieReview } from '@/shared/api/WatchAMovieService';
import type { ReviewsTypes, tReviews } from '@/shared/lib/types';

interface ReviewStoreSchema {
    loading: boolean;
    error: boolean;
    reviews: tReviews['items'];
    totalInfo: tReviews['total'] | null;
    page: number;
    totalPages: number;
    filter: ReviewsTypes | ''
}

export const useReviewStore = defineStore('reviewsStore', {
    state: (): ReviewStoreSchema => ({
        loading: true,
        reviews: [],
        page: 1,
        totalInfo: null,
        totalPages: 1,
        error: false,
        filter: ''
    }),
    actions: {
        getItemReviews(id: string, incresePage?: boolean) {
            this.loading = true;
            if (incresePage) {
                this.page += 1;
            }
            getMovieReview(id, this.page)
                .then(res => {
                    this.reviews.push(...res.items);
                    this.totalPages = res.total.totalPages;
                    this.totalInfo = res.total;
                })
                .catch(() => {
                    this.error = true;
                })
                .finally(() => this.loading = false);
        },
    },
    getters: {
        filteredReviews(state) {
            if (!state.reviews.length){
                return [];
            };
            if(state.filter === ''){
                return state.reviews;
            }
            return state.reviews.filter(el => el.type === state.filter);
        }
    }
});