<template>
    <ContainerItemsAll v-if="list && list.length" ref="refContainer">
        <template v-if="heading" #heading>
            {{ heading }}
        </template>

        <template #content-aside>
            <Filter @sendFilters="sendFilters" :exclude-fields="['movieCountry']"  class=""/>
        </template>

        <template #content-main>
            <CategoryList :items="slicedList" :loading="false" :error="false" />
            <PaginationArrows v-if="totalPages > 1" :page="page" :totalPages="totalPages" @changePage="changePage" />
        </template>

    </ContainerItemsAll>
    <h2 v-else>
        Вы ничего не добавили в ваш список
    </h2>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import tFilters from '@/types/tFilters.ts'
    import ContainerItemsAll from '@/components/ContainerItemsAll.vue'
    import Filter from '@/components/Filter.vue'
    import { CategoryList } from '@/components/CategoryList'
    import PaginationArrows from '@/components/PaginationArrows.vue'
    import { allItemsPerPage } from '@/utils/constants.ts'



    export default defineComponent({
        name: "ListSingle",
        components: {
            ContainerItemsAll,
            Filter,
            CategoryList,
            PaginationArrows
        },
        props: {
            heading: {
                type: String,
            },
            list: {
                type: Array,
                default: ()=> ([])
            }
        },
        data: ()=> {
          return {
              page: 1 as number,
              lastFilter: null as null | tFilters
          }
        },

        computed: {
            perPage(){
                return allItemsPerPage;
            },
            totalPages(){
                return Math.max(Math.ceil(this.filteredList.length / this.perPage), 1)
            },
            filteredList(){

                if(this.lastFilter){

                    const {
                        keyword,
                        movieYears,
                        movieRating,
                        movieGenre
                    } = this.lastFilter;

                    return this.list.filter((el: any) => (
                       (el.name.toLowerCase().includes(keyword.toLowerCase())
                        && el.year >= movieYears.min && el.year <= movieYears.max)
                        && (el.rating >= movieRating.min && el.rating <= movieRating.max)
                        && el.genres.toLowerCase().includes(movieGenre.toLowerCase())
                        )
                    )
                }
                return this.list;

            },
            slicedList(){
                return this.filteredList.slice((this.page - 1)*this.perPage, this.page*this.perPage);
            }
        },
        methods: {
            sendFilters(filters){
                this.lastFilter = JSON.parse(JSON.stringify(filters));
            },
            changePage(p){
                this.page = p;
                scrollTo(0, 0)
            }
        }
    })
</script>

<style scoped lang="scss">
    h2{
        text-align: center
    }
</style>