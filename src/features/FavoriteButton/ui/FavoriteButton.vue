<template>
    <AddToListButton storage-name="favorite" :item="item">
        <template #not-added>
            <i class="fas fa-heart"></i>
            <span>В избранное</span>
        </template>
        <template #added>
            <i class="fas fa-heart color-black"></i>
            <span>В избранном</span>
        </template>
    </AddToListButton>
</template>

<script lang="ts" setup>
import { AddToListButton } from '@/entities/AddToListButton';
import type { iCategoryItem, tMovieExtracted } from '@/shared/lib/types';


interface FavoriteButtonProps {
    item: iCategoryItem | tMovieExtracted
}

defineProps<FavoriteButtonProps>();


</script>

<style scoped></style>