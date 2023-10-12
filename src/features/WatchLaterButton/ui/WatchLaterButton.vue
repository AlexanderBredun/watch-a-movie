<template>
    <AddToListButton storage-name="watchLater" :item="item">
        <template #not-added>
            <i class="fas fa-bookmark"></i>
            <span>Смотреть позже</span>
        </template>
        <template #added>
            <i class="fas fa-bookmark color-black"></i>
            <span>Буду смотреть</span>
        </template>
    </AddToListButton>
</template>

<script lang="ts" setup>
import { AddToListButton } from '@/entities/AddToListButton';
import type { iCategoryItem, tMovieExtracted } from '@/shared/lib/types';

interface WatchLaterButtonProps {
    item: iCategoryItem | tMovieExtracted
}
defineProps<WatchLaterButtonProps>();
</script>

<style scoped></style>