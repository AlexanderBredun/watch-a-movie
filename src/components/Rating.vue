<template>
    <p class="rating" :class="ratingColor">
        {{ ratingWithZero }}
    </p>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: "Rating",
        props: {
            rating: {
                type: [Number, String],
                required: true
            }
        },
        computed: {
            ratingColor():string {
                if(this.rating >= 8){
                    return 'high-rating';
                }
                else if(this.rating > 6 && this.rating < 8){
                    return 'medium-rating'
                }
                return 'low-rating'
            },
            ratingWithZero(){
                return this.rating.toString().length === 1 ? this.rating + '.0' : this.rating;
            }
        }
    })
</script>

<style scoped lang="scss">
    .rating{
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

        &.high-rating{
            background: #69F5A8;
        }
        &.medium-rating{
            background: #F5DE69;
        }
        &.low-rating{
            background: #F56969;
        }
    }
</style>