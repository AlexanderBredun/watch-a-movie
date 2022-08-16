<template>
    <MovieSkeleton v-if="loading && !error"/>
    <ErrorHelper v-else-if="!loading && error" :error="error" />
    <section v-else-if="!loading && !error" class="section-person space-header">

        <div class="wrapper">
            <BackButton/>
            <div class="item-single">
                <div class="item-top">
                    <div class="item-image">
                        <img width="360" height="540" :src="item.image" alt="">
                    </div>
                    <div class="item-info ">
                        <div class="item-name">
                            <h1>
                                {{ item.nameRu || item.nameEn }}
                            </h1>
                            <p v-if="item.nameRu">
                                {{ item.nameEn }}
                            </p>
                        </div>
                        <ItemDetails title="О персоне" :items="item.details"/>
                    </div>
                </div>

                <TabsItem>

                    <Tab class="tab-el" name="Фильмы">
                        <h2>
                            Фильмы <span class="count">({{ item.films.length }})</span>
                        </h2>
                        <PersonMovies :films="item.films" />
                    </Tab>
                    <Tab v-if="item.facts.length" class="tab-el" name="Факты">

                        <h2>Знаете ли вы что...</h2>
                        <Facts class="items-facts" :items="item.facts" />

                    </Tab>

                </TabsItem>
            </div>
        </div>
    </section>

</template>

<script>
    import { defineComponent } from 'vue';
    import BackButton from '@/components/ui/BackButton.vue'
    import MovieSkeleton from '@/components/MovieSkeleton.vue'
    import ErrorHelper from '@/components/screens/ErrorHelper.vue'
    import ItemDetails from '@/components/ItemDetails.vue'
    import Facts from '@/components/Facts.vue'
    import TabsItem from '@/components/ui/TabsItem.vue'
    import PersonMovies from '@/components/screens/person/PersonMovies.vue'

    import {Tab} from 'vue3-tabs-component';


    export default defineComponent({
        name: "PersonScreen",
        components: {
            BackButton,
            ErrorHelper,
            TabsItem,
            Tab,
            MovieSkeleton,
            ItemDetails,
            Facts,
            PersonMovies
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


</style>