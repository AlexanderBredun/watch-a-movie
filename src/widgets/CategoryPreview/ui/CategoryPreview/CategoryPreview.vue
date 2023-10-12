<template>
    <section class="section-category-preview">
        <div class="wrapper">
            <div class="category-heading">
                <div class="category-heading-text">
                    <h2>
                        {{ heading }}
                    </h2>
                </div>
                <AppButton v-if="error" @click="()=> refresh()" class="btn-more">
                    Обновить
                </AppButton>
                <AppButton v-else tag="router-link" to="/movies" class="btn-more">
                    Смотреть все
                </AppButton>
            </div>
            <p v-if="error">
                Что-то пошло не так попробуйте позже
            </p>
            <template v-else>
                <CategoryPreviewList :items="slicedItems" :skeleton="loading && !dataComp.items.length"
                                     :skeleton-count="5" />

                <LoadingButton v-if="dataComp.items.length && data?.total !== dataComp.items.length" :loading="loading"
                               class="btn-load-more" @click.prevent="loadMoreItems">
                    Смотреть еще
                </LoadingButton>
                <AppButton tag="router-link" to="/movies" v-else-if="data?.total === dataComp.items.length"
                           class="btn-load-more">
                    Смотреть все
                </AppButton>
            </template>


        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { getNewItemsByType } from '@/shared/api/WatchAMovieService';
import { useFetch } from '@/shared/lib/hooks';
import type { ItemType, iCategoryItem, tPreviewsExtracted } from '@/shared/lib/types';
import { previewItemsPerPage } from '@/shared/lib/utils';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import LoadingButton from '@/shared/ui/LoadingButton/LoadingButton.vue';
import CategoryPreviewList from '../CategoryPreviewList/CategoryPreviewList.vue';

interface CategoryPreviewProps {
    heading: string;
    typeItems: ItemType
}

const props = defineProps<CategoryPreviewProps>();

interface CategoryPreviewData {
    page: number
    pageLocal: number
    items: iCategoryItem[]
}

const dataComp = reactive<CategoryPreviewData>({
    page: 1,
    pageLocal: 1,
    items: []
});

const slicedItems = computed(() => {
    return dataComp.items.slice(0, dataComp.pageLocal * previewItemsPerPage);
});

const { data, loading, error, refresh } = useFetch<tPreviewsExtracted>(() => getNewItemsByType(dataComp.page, props.typeItems), (data) => {
    dataComp.items.push(...data.items);
});

function loadMoreItems() {
    if (slicedItems.value.length === dataComp.items.length) {
        dataComp.page += 1;
        refresh();
    }
    dataComp.pageLocal += 1;
}

</script>

<style lang="scss" scoped></style>