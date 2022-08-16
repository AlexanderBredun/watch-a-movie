<template>
    <MovieSkeleton v-if="loading && !error"/>
    <ErrorHelper v-else-if="!loading && error" :error="error" />
    <section v-else-if="!loading && !error" class="section-movie space-header">

        <div class="wrapper">
            <BackButton/>
            <div class="item-single">
                <div class="item-top">
                    <div class="item-image">
                        <img width="360" height="540" :src="item.image" alt="">
                        <Rating v-if="item.rating" :rating="item.rating"/>
                    </div>
                    <div class="item-info">
                        <div class="item-name">
                            <h1>
                                {{ item.nameRu || item.nameOriginal }} ({{ item.year }})
                            </h1>
                            <p v-if="item.slogan">
                                {{ item.slogan }}
                            </p>
                            <ul class="item-buttons">
                                <li>
                                    <AppButton tag="router-link" :to="'/watch/' + $route.params.id" with-icon variant="slim">
                                        <i class="far fa-play"></i>
                                        <span>Смотреть</span>
                                    </AppButton>
                                </li>
                                <li>
                                    <WatchLaterButton :item="item"/>
                                </li>
                            </ul>
                        </div>
                        <ItemDetails title="О фильме" :items="item.details"/>
                    </div>
                </div>

                <div v-if="item.description" class="movie-item-description">
                    <h2>
                        Описание
                    </h2>
                    <p>
                        {{ item.description }}
                    </p>
                </div>


                <TabsItem>

                    <Tab class="tab-el" name="Актёры">
                        <h2>
                            Актёры <span class="count">({{ item.movieActors.length }})</span>
                        </h2>
                        <MovieActorSlider :actors="item.movieActors"/>
                    </Tab>
                    <Tab v-if="item.itemSimilar.length" class="tab-el" name="Похожие">
                        <h2>
                            Похожие <span class="count">({{ item.itemSimilar.length }})</span>
                        </h2>
                        <MovieSimilarSlider :films="item.itemSimilar"/>
                    </Tab>
                    <Tab v-if="item.itemFacts.itemFactsLength" class="tab-el" name="Факты">

                        <div v-if="item.itemFacts.facts.length" class="movie-facts">
                            <h2>Знаете ли вы что...</h2>
                            <Facts class="items-facts" :items="item.itemFacts.facts" />
                        </div>
                        <div v-if="item.itemFacts.bloopers.length" class="movie-bloopers">
                            <h2>Ошибки в фильме</h2>
                            <Facts class="items-facts" :items="item.itemFacts.bloopers" />

                        </div>
                    </Tab>
                    <Tab  v-if="item.movieReviews > 0" class="tab-el" name="Рецензии">
                        <h2>
                            Рецензии
                        </h2>
                        <Reviews/>
                    </Tab>
                </TabsItem>
            </div>
        </div>
    </section>

</template>

<script>
    import { defineComponent } from 'vue';
    import BackButton from '@/components/ui/BackButton.vue'
    import AppButton from '@/components/ui/AppButton.vue'
    import MovieSkeleton from '@/components/MovieSkeleton.vue'
    import Rating from '@/components/Rating.vue'
    import ErrorHelper from '@/components/screens/ErrorHelper.vue'
    import ItemDetails from '@/components/ItemDetails.vue'
    import Facts from '@/components/Facts.vue'
    import Reviews from '@/components/screens/movie/Reviews/Reviews.vue'
    import TabsItem from '@/components/ui/TabsItem.vue'
    import WatchLaterButton from '@/components/WatchLaterButton.vue'

    import { MovieSimilarSlider, MovieActorSlider } from '@/components/screens/movie'

    import {Tab} from 'vue3-tabs-component';


    export default defineComponent({
        name: "MovieScreen",
        components: {
            BackButton,
            Rating,
            ErrorHelper,
            TabsItem,
            Tab,
            MovieActorSlider,
            MovieSimilarSlider,
            MovieSkeleton,
            ItemDetails,
            Facts,
            Reviews,
            WatchLaterButton,
            AppButton
        },
        props: {
            item: {
                type: [Object, null],
                required: true
            },
            loading: Boolean,
            error: Boolean
        },

    })
</script>

<style scoped lang="scss">
    .movie-item-description{
        margin: 0 0 var(--margin-block);
    }


</style>