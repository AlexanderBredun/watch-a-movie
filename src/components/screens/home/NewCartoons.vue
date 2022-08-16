<template>
    <section class="section-category-preview" >
        <div class="wrapper">
            <div class="category-heading">
                <div class="category-heading-text">
                    <h2>
                        Популярные мультфильмы
                    </h2>
                </div>
                <AppButton tag="router-link" to="/cartoons" class="btn-more">
                    Смотреть все
                </AppButton>
            </div>

            <CategoryPreviewBlock :items="items" :skeleton="loading" />

            <LoadingButton v-if="totalItems !== items.length" :loading="loading"  class="btn-load-more" @click.prevent="loadMoreItems">
                Смотреть еще
            </LoadingButton>
            <AppButton tag="router-link" to="/cartoons" v-else-if="totalItems === items.length" class="btn-load-more">
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
        name: "NewCartoons",
        components: {
            CategoryPreviewBlock,
            AppButton,
            LoadingButton
        },
        computed: {
            ...mapState({
                items: (store)=> store.newCartoons.slicedItems,
                loading: (store)=> store.newCartoons.loading,
                error: (store)=> store.newCartoons.error,
                totalItems: (store)=> store.newCartoons.error,
            }),

        },
        methods: {
            loadMoreItems(){
                this.$store.dispatch('newCartoons/loadMoreItems')
            },
        }
    }
</script>

<style scoped lang="scss">

</style>