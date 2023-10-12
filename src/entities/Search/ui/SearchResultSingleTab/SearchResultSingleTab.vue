<template>
    <div class="tab-el">
        <h2>
            {{ heading }}
        </h2>
       
        <div class="search-bar-results-list">
            <slot name="list"></slot>
        </div>

        <router-link v-if="!loading && !error" class="link-watch-all" data-close-aside-content
                     :to="{ path: '/search', query: { filters: stringifyQuery, m: type } }">
            Смотреть все
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useDebounce } from '@/shared/lib/hooks';
import type { ItemType } from '@/shared/lib/types';
import { useSearchStore } from '../../store/searchStore';

interface SearchResultSingleTabProps {
    heading: string
    type: ItemType
    isActive?: boolean
}

const props = defineProps<SearchResultSingleTabProps>();

const searchStore = useSearchStore();

const { error, loading, search } = storeToRefs(searchStore);
const lastSearch = ref('');
const handleSearch = useDebounce(()=> searchStore.getItemsBySearch(props.type));
const stringifyQuery = computed(() => JSON.stringify({ keyword: search.value }));
// searchStore.getItemsBySearch(props.type)
watch(search, (val) => {
    if (props.isActive) {
        lastSearch.value = val;
        handleSearch();
    }
}, { immediate: true });

watch(() => props.isActive, (val) => {
    if (val === true && lastSearch.value !== search.value) {
        handleSearch();
        lastSearch.value = search.value;
    }
});



</script>

<style scoped lang="scss">
.link-watch-all {
    margin: 2rem 0 0;
    display: block;
}

.tab-el {
    h2 {
        margin: 0 0 2rem;
    }
}

.search-bar-results-list {
    overflow: auto;
    height: calc(100vh - 40rem);

    @include sm {
        height: calc(100vh - 400px);
    }

    :deep() {
        .category-item-wrapper {
            display: flex;

            .category-item-content {
                @include maxsm {
                    margin: 0 0 0 1rem;
                    width: 66%;

                    p {
                        margin: 0 0 1rem;
                        font-size: 13px;
                    }
                }
            }
        }
    }

    /* width */
    &::-webkit-scrollbar {
        width: 3px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: var(--color-black);
        border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
}
</style>