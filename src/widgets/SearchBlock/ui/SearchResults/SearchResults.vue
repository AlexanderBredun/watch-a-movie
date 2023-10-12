<template>
    <div class="search-results">
        <TabsList @changed="tabChanged" v-slot="{ Tab }">
            <component :is="Tab" v-for="(tab) in data.tabs" :key="tab.heading" :name="tab.heading">

                <SearchResultSingleTab :is-active="data.selectedTab === tab.heading" :heading="tab.heading"
                                       :type="tab.type">
                    <template #list>
                        <LayoutSearchLoading :items="items[tab.type]" :loading="loading" :error="error">
                            <CategoryItem variant="search-bar" v-for="item in items[tab.type]" :key="item.id"
                                      :item="item" />
                        </LayoutSearchLoading>
                    </template>
                </SearchResultSingleTab>
            </component>
        </TabsList>
    </div>
</template>

<script lang="ts" setup>

import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
import { CategoryItem } from '@/entities/CategoryItem';
import { LayoutSearchLoading } from '@/entities/LayoutSearchLoading';
import { SearchResultSingleTab, useSearchStore } from '@/entities/Search';
import type { FilterOrigin, ItemType } from '@/shared/lib/types';
import TabsList from '@/shared/ui/TabsList/TabsList.vue';

type tabName = 'Фильмы' | 'Сериалы' | 'Мультфильмы'
interface SelectedTab {
    tab: {
        name: tabName
    }
}
interface SearchResultsData {
    selectedTab: tabName
    tabs: {
        heading: tabName;
        type: ItemType;
    }[]
}

const { items, loading, error } = storeToRefs(useSearchStore());

const data = reactive<SearchResultsData>({
    selectedTab: 'Фильмы',
    tabs: [
        {
            heading: 'Фильмы',
            type: 'FILM'
        },
        {
            heading: 'Сериалы',
            type: 'TV_SERIES'
        },
        {
            heading: 'Мультфильмы',
            type: 'MULT'
        },
    ]
});

function tabChanged(selectedTab: SelectedTab) {
    data.selectedTab = selectedTab.tab.name;
}

</script>

<style scoped lang="scss">
.search-results {
    margin: 2rem 0 0;

    @include sm {
        margin: 5rem 0 0;
    }

    :deep() {
        .tabs-wrapper {
            margin: 0;
        }

        .tabs-component-panels {
            margin-top: 2rem;
        }

        .tabs-component-tabs {
            justify-content: space-between;
        }
    }
}
</style>