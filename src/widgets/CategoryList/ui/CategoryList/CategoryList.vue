<template>
    <div class="category-list">
        <LayoutSearchLoading :items="items" :loading="loading" :error="error">
            <PaginationArrows class="pagination-top" v-if="totalPages && totalPages * perPage > perPage" :page="page"
                              :totalPages="totalPages" @changePage="$emit('changePage', $event)" />
            <CategoryItem :variant="variant" v-for="item in items" :key="item.id" :item="item">
                <template #aside>
                    <WatchLaterButton class="category-item-btn" :item="item" />
                    <FavoriteButton class="category-item-btn" :item="item" />
                </template>
            </CategoryItem>
            <PaginationArrows class="pagination-bot" v-if="totalPages && totalPages * perPage > perPage" :page="page"
                              :totalPages="totalPages" @changePage="$emit('changePage', $event)" />

            <template #error-slot>
                <ErrorHelper />
            </template>
        </LayoutSearchLoading>
    </div>
</template>

<script lang="ts" setup>
import { FavoriteButton } from '@/features/FavoriteButton';
import { PaginationArrows } from '@/features/PaginationArrows';
import { WatchLaterButton } from '@/features/WatchLaterButton';
import { CategoryItem } from '@/entities/CategoryItem';
import { ErrorHelper } from '@/entities/ErrorHelper';
import { LayoutSearchLoading } from '@/entities/LayoutSearchLoading';
import type { iCategoryItem } from '@/shared/lib/types';
import { allItemsPerPage as perPage } from '@/shared/lib/utils/constants';
// import CategoryListPagination from '../CategoryListPagination/CategoryListPagination.vue';


interface CategoryListProps {
    variant?: 'search-bar'
    items: Array<iCategoryItem> | null
    loading: boolean
    error: boolean
    totalPages?: number
    page: number
}

defineProps<CategoryListProps>();
defineEmits<{
    (event: 'changePage', page: number): void
}>();

</script>

<style scoped lang="scss">
.loader-category-list,
.category-list-empty {
    margin: 15rem auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pagination-top {
    margin: 3rem 0 3rem;
    padding: 0 0 0 3rem;
}

.pagination-bot {
    margin: 4rem 0 0;
}

.category-list-empty {
    text-align: center;
}
</style>