<template>
    <div class="category-list">
        <LayoutSearchLoading :items="items" :loading="loading" :error="error">
            <CategoryListPagination class="pagination-top" v-if="totalPages && totalPages*perPage > perPage" />
            <CategoryItem :variant="variant" v-for="item in items" :key="item.id" :item="item" />
            <CategoryListPagination class="pagination-bot" v-if="totalPages && totalPages*perPage > perPage" />
        </LayoutSearchLoading>
    </div>

</template>

<script lang="ts">

    import { defineComponent, PropType } from 'vue';
    import CategoryListPagination from './CategoryListPagination.vue'
    import CategoryItem from './CategoryItem.vue'
    import LayoutSearchLoading from '@/components/LayoutSearchLoading.vue'

    import { allItemsPerPage } from '@/utils/constants.ts'

    type ObjectStringsNums = {
        [key:string]: string | number;
    }

    export default defineComponent({
        name: "CategoryList",
        components: {
            CategoryItem,
            LayoutSearchLoading,
            CategoryListPagination
        },
        props: {
            variant: String,
          items: {
              type: [Array, null] as PropType<ObjectStringsNums[]>,
              required: true
          },
          loading: {
              type: Boolean,
              required: true
          },
            error: {
                type: Boolean,
                required: true
            },
            totalPages: {
                type: Number,
            },
        },
        computed: {
            perPage(){
                return allItemsPerPage;
            }
        }

    })
</script>

<style scoped lang="scss">

    .loader-category-list, .category-list-empty{
        margin: 15rem auto 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pagination-top{
        margin: 3rem 0 3rem;
        padding: 0 0 0 3rem;
    }
    .pagination-bot{
        margin: 4rem 0 0;
    }
    .category-list-empty{
        text-align: center;
    }
</style>