<template>
<section class="section-category-preview" >
        <div class="wrapper">
            <div class="category-heading">
               <div class="category-heading-text">
                    <h2>
                        Популярные фильмы
                    </h2>
               </div>
                <AppButton tag="router-link" to="/movies" class="btn-more">
                    Смотреть все
                </AppButton>
            </div>

            <CategoryPreviewBlock  :items="items"  :skeleton="loading && !items.length" :skeleton-count="5" />

            <LoadingButton v-if="totalItems !== items.length" :loading="loading"  class="btn-load-more" @click.prevent="loadMoreItems">
                Смотреть еще
            </LoadingButton>
            <AppButton tag="router-link" to="/movies" v-else-if="totalItems === items.length" class="btn-load-more">
                Смотреть все
            </AppButton>

           
        </div>
    </section>
</template>

<script>
    import {mapState} from 'vuex'
    import {CategoryPreviewBlock} from '@/components/CategoryPreview'
    import AppButton from '@/components/ui/AppButton.vue'
    import LoadingButton from '@/components/LoadingButton.vue'

    export default {
        name: "NewMovies",
        components: {
            CategoryPreviewBlock,
            AppButton,
            LoadingButton
        },
        computed: {
            ...mapState({
                items: (store)=> store.newMovies.slicedItems,
                loading: (store)=> store.newMovies.loading,
                error: (store)=> store.newMovies.error,
                totalItems: (store)=> store.newMovies.totalItems,
            }),
            
        },
        methods: {
            loadMoreItems(){
                this.$store.dispatch('newMovies/loadMoreItems')
            },
        }
    }
</script>

<style scoped lang="scss">


</style>