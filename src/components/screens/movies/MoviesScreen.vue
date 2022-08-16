<template>
    <ContainerItemsAll ref="refContainer">
        <template #heading>
            Все фильмы
        </template>

        <template #sub-heading>
            Поборка фильмов всего мира
        </template>

        <template #content-aside>
            <Filter @sendFilters="sendFilters"  class=""/>
        </template>

        <template #content-main>
            <CategoryList :items="items" :loading="loading" :error="error" :total-pages="totalPages"/>
        </template>

    </ContainerItemsAll>

</template>

<script lang="ts">
    import { mapState } from 'vuex'
    import { defineComponent } from 'vue';
    import Filter from '@/components/Filter.vue'
    import ContainerItemsAll from '@/components/ContainerItemsAll.vue'
    import { CategoryList } from '@/components/CategoryList'

    export default defineComponent({
        name: "MoviesScreen",
        components: {
            Filter,
            ContainerItemsAll,
            CategoryList
        },
        data: ()=> {
            return {
                lastFilters: {} as Record<any, any>,
                itemsType: 'filmsFilter' as string
            }
        },

        computed: {
          ...mapState({
              page: (state: any)=> state.filterData.page,

              items: (state: any)=> state.filterData.items,
              loading: (state: any)=> state.filterData.loading,
              error: (state: any)=> state.filterData.error,
              totalPages: (state: any)=> state.filterData.totalPages,
          })
        },
        watch: {
            page(){
                this.sendFilters(this.lastFilters, true)
            }
        },
        methods: {
            sendFilters(filters, force = false){

                if(!force){
                    if(JSON.stringify(filters) === JSON.stringify(this.lastFilters) ){
                        return;
                    }
                }

                (this.$refs['refContainer'] as any).closeAside();
                scrollTo(0, 0);
                this.$store.dispatch('filterData/getFilterData', {filters, itemsType: this.itemsType, origin: this.itemsType})
                this.lastFilters = JSON.parse(JSON.stringify(filters));
            },
        }
    })
</script>

<style scoped>

</style>