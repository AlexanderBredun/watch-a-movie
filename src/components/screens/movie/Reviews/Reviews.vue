<template>
    <Loader v-if="!reviews.length"/>
    <div v-else ref="blockReviews" class="block-reviews">
        <ReviewsInfo :total="total" @setFilter="setFilter"/>
        <div class="reviews">
            <ReviewItem v-for="(review, i) in filteredReviews" :key="i" :review="review" />
            <LoadingButton v-if="page < totalPages" :loading="loading" @click.prevent="loadMoreItems">
                Смотреть еще
            </LoadingButton>
        </div>

    </div>
</template>

<script >
    import { defineComponent } from 'vue';
    import watchAMovieService from '@/services/WatchAMovieService.ts'
    import Loader from '@/components/ui/Loader.vue'
    import ReviewItem from './ReviewItem.vue'
    import ReviewsInfo from './ReviewsInfo.vue'
    import tReviews from '@/types/tReviews.ts'
    import LoadingButton from '@/components/LoadingButton.vue'

    export default defineComponent({
        name: "Reviews",
        components: {
            ReviewItem,
            ReviewsInfo,
            Loader,
            LoadingButton
        },

        data(){
            return {
                reviews: [],
                total: null,
                filter: '',
                loading: true,
                error: false,
                page: 1,
                totalPages: 1
            }
        },
        mounted(){
            this.getReviews()
        },
        methods: {
            setFilter(val){

                if(this.filter !== val){

                    this.filter = val;
                    const y = this.$refs.blockReviews.getBoundingClientRect().top + window.pageYOffset - 170;
                    window.scrollTo({top: y});
                }
            },
            loadMoreItems(){
                this.page += 1;
                this.getReviews()
            },
            async getReviews(){
                this.loading = true;

                await watchAMovieService.getMovieReview(this.$route.params.id, this.page)
                    .then(res => {
                        console.log(res);
                        this.reviews.push(...res.items);
                        this.totalPages = res.total.totalPages;
                        this.total = res.total;
                    })
                    .catch(() => {
                        this.error = true;

                    });

                this.loading = false;
            }
        },
        computed: {
            filteredReviews(){

                if(!this.reviews.length) return [];

                if(!this.filter) return this.reviews;

                return this.reviews.filter(el => el.type.toLowerCase() === this.filter)
            }
        }

    })
</script>

<style scoped lang="scss">
    .block-reviews{

        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row-reverse;
        @include md{
            display: flex;
        }
        .reviews{
            flex: 1;
        }

    }
</style>