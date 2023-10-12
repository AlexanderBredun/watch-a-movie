<template>
    <ContainerItemsAll>
        <template #heading>
           <slot name="heading"></slot>
        </template>

        <template #sub-heading>
            <slot name="sub-heading"></slot>
        </template>

        <template #content-aside>
            <CategoryFilter @sendFilters="sendFilters"  class=""/>
        </template>

        <template #content-main>
            <CategoryList :items="items" :loading="loading" :error="error" :total-pages="totalPages" :page="page" @change-page="changePage"/>
        </template>
    </ContainerItemsAll>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { CategoryFilter } from '@/widgets/CategoryFilter';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { CategoryList } from '@/widgets/CategoryList';
import { ContainerItemsAll } from '@/entities/ContainerItemsAll';
import type { FilterOrigin, ItemType, tFilters } from '@/shared/lib/types';
import { useCategoryScreenStore } from '../../store/categoryScreenStore';

interface CategoryScreenProps{
    type: ItemType
}

const props = defineProps<CategoryScreenProps>();

const moviesStore = useCategoryScreenStore();

const { items, error, loading, totalPages, page } = storeToRefs(moviesStore);

const sendFilters = (filters: tFilters)=> {
    moviesStore.getCategoryItems(props.type, filters);
};

const changePage = (page: number)=> {
    moviesStore.page = page;
    moviesStore.getCategoryItems(props.type);
};


</script>

<style scoped></style>