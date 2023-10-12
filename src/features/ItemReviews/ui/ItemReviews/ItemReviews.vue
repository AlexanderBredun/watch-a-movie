<template>
   
    <AppLoader v-if="loading" />
    <p v-if="!filteredReviews.length" >
        Рецнзии не найдены
    </p>
    <div v-else ref="blockReviewsRef" class="block-reviews">

        <ItemReviewsFilter v-if="totalInfo" :total="totalInfo" @setFilter="setFilter" />
        <div class="reviews">
            <ItemReviewsItem v-for="(review, i) in filteredReviews" :key="i" :review="review" />
            <LoadingButton v-if="page < totalPages" :loading="loading" @click.prevent="reviewsStore.getItemReviews(itemId, true)">
                Смотреть еще
            </LoadingButton>
        </div>

    </div>
</template>

<script setup lang="ts">

import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import type { ReviewsTypes } from '@/shared/lib/types';
import AppLoader from '@/shared/ui/AppLoader/AppLoader.vue';
import LoadingButton from '@/shared/ui/LoadingButton/LoadingButton.vue';
import { useReviewStore } from '../../store/reviewsStore';
import ItemReviewsFilter from '../ItemReviewsFilter/ItemReviewsFilter.vue';
import ItemReviewsItem from '../ItemReviewsItem/ItemReviewsItem.vue';

interface ItemReviewsProps{
    itemId: string
}

const props = defineProps<ItemReviewsProps>();

const blockReviewsRef = ref<null | HTMLElement>(null);
const reviewsStore = useReviewStore();
const { loading, page, totalPages, totalInfo, filteredReviews, filter } = storeToRefs(reviewsStore);


reviewsStore.getItemReviews(props.itemId);

function setFilter(val: ReviewsTypes | '') {
    if (filter.value !== val) {
        reviewsStore.filter = val;
        const y = blockReviewsRef.value!.getBoundingClientRect().top + window.scrollY - 170;
        window.scrollTo({ top: y });
    }
}


</script>

<style scoped lang="scss">
.block-reviews {

    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row-reverse;

    @include md {
        display: flex;
    }

    .reviews {
        flex: 1;
    }

}
</style>