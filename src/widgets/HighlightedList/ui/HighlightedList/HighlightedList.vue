<template>
    <ContainerItemsAll v-if="list && list.length">
        <template #heading>
            <slot name="heading"></slot>
        </template>

        <template #content-aside>
            <CategoryFilter @sendFilters="sendFilters" :exclude-fields="['movieCountry']" class="" />
        </template>

        <template #content-main>
            <CategoryList :items="slicedList" :loading="false" :error="false" :total-pages="totalPages" :page="data.page"
                          @change-page="changePage" />
        </template>

    </ContainerItemsAll>
    <h2 v-else>
        Вы ничего не добавили в ваш список
    </h2>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed, reactive } from 'vue';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { CategoryFilter } from '@/widgets/CategoryFilter';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { useCategoryFilterStore } from '@/widgets/CategoryFilter/store/categoryFilterStore';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { CategoryList } from '@/widgets/CategoryList';
import { ContainerItemsAll } from '@/entities/ContainerItemsAll';
import type { iCategoryItem, tFilters, tListshIghlight } from '@/shared/lib/types';
import { allItemsPerPage as perPage } from '@/shared/lib/utils';

interface HighlightedListProps {
    type: tListshIghlight
}
interface HighlightedListData {
    page: number,
    lastFilter: tFilters | null;
}

const { genres } = storeToRefs(useCategoryFilterStore());

const props = defineProps<HighlightedListProps>();
const listFromStore = localStorage.getItem(props.type);
const parsedList: null | iCategoryItem[] = listFromStore ? JSON.parse(listFromStore) : null;
const list: iCategoryItem[] = Array.isArray(parsedList) ? parsedList.reverse() : [];

const data = reactive<HighlightedListData>({
    page: 1,
    lastFilter: null
});

const totalPages = computed(() => {
    return Math.max(Math.ceil(filteredList.value.length / perPage), 1);
});
const filteredList = computed(() => {
    if (data.lastFilter) {

        const {
            keyword,
            movieYears,
            movieRating,
            movieGenre
        } = data.lastFilter;

        const genreName = genres.value?.find(el => el.id.toString() == movieGenre)?.text;

        return list.filter((el) => (
            (el.name?.toLowerCase().includes(keyword.toLowerCase())
                && (el.year || 0) >= movieYears.min && (el.year || 0) <= movieYears.max)
            && ((el.rating || 0) >= movieRating.min && (el.rating || 0) <= movieRating.max)
            && (genreName ? el.genres?.toLowerCase().includes(genreName.toLowerCase()) : true)
        )
        );
    }
    return list;
});

const slicedList = computed(() => {
  
    return filteredList.value.slice((data.page - 1) * perPage, data.page * perPage);
});

function sendFilters(filters: tFilters) {
    data.lastFilter = JSON.parse(JSON.stringify(filters));
    scrollTo(0, 0);
}
function changePage(p: number) {
    data.page = p;
    scrollTo(0, 0);
}


</script>

<style scoped lang="scss">
h2 {
    text-align: center
}
</style>