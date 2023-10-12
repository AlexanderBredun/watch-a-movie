<template>
    <p class="rating" :class="ratingColor">
        {{ ratingWithZero }}
    </p>
</template>

<script lang="ts" setup>
import { computed } from 'vue';


interface RatingBlockProps {
    rating: number
}

const props = defineProps<RatingBlockProps>()

const ratingColor = computed(() => {
    if (props.rating >= 8) {
        return 'high-rating';
    }
    else if (props.rating > 6 && props.rating < 8) {
        return 'medium-rating'
    }
    return 'low-rating'
})

const ratingWithZero = computed(() => props.rating.toString().length === 1 ? props.rating + '.0' : props.rating)

</script>

<style scoped lang="scss">
.rating {
    position: absolute;
    font-size: var(--size-sm);
    right: 2rem;
    top: 2rem;
    z-index: 2;
    margin: 0;
    padding: .7rem 1rem;
    border-radius: 1rem;
    color: var(--color-black);
    background: var(--color-blue);

    &.high-rating {
        background: #69F5A8;
    }

    &.medium-rating {
        background: #F5DE69;
    }

    &.low-rating {
        background: #F56969;
    }
}
</style>