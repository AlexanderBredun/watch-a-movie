<template>
    <ul v-if="skeleton" class="category-items">
        <li class="item" v-for="(item, i) in skeletonCount" :key="i">
            <CategoryPreviewItem skeleton />
        </li>
    </ul>

    <ul v-else class="category-items">
        <li class="item" v-for="item in items" :key="item.id">
            <CategoryPreviewItem :item="item" />
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { CategoryPreviewItem } from '@/entities/CategoryPreviewItem';
import type { iCategoryItem } from '@/shared/lib/types';

interface CategoryPreviewListProps{
    items: iCategoryItem[];
    skeleton?: boolean
    skeletonCount?: number
}

withDefaults(defineProps<CategoryPreviewListProps>(), {
    skeletonCount: 5
});

</script>

<style scoped lang="scss">
.category-items {
    display: grid;
    grid-template-columns: repeat(2, 48%);
    grid-gap: 6rem 3rem;
    margin-bottom: var(--margin-block);

    @include md {
        grid-template-columns: repeat(4, 23%);
    }

    @include lg {
        grid-template-columns: repeat(5, 18%);
    }
}
</style>