<template>
    <div class="search-bar-input">
        <input type="text" placeholder="Поиск..." @input="handleInput">
        <i class="fal fa-search fa-lg color-black search-icon"></i>
    </div>
    <SearchResults v-if="search" />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useSearchStore } from '@/entities/Search';
import SearchResults from '../SearchResults/SearchResults.vue';

const searchStore = useSearchStore();

const { search } = storeToRefs(searchStore);


function handleInput(e: Event) {
    
    searchStore.search = (e.target as HTMLInputElement).value;
}

</script>

<style lang="scss" scoped></style>