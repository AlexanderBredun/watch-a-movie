<template>
    <div>
        <div v-if="skeleton" class="preview-item">
        <div class="preview-item-image">
            <ImagePreview skeleton />
        </div>
        <SkeletItem />
        <SkeletItem width="80%" />
        <SkeletItem width="60%" />
    </div>
    <template v-else-if="item">
        <ZoomImage v-if="imageOnly" class="preview-item-mini">
            <router-link :to="routeItem">
                <img v-if="item.img" loading="lazy" :src="item.img" width="216" height="308" alt="">
                <img v-else loading="lazy" :src="defaultPosterImg" width="216" height="308" alt="">
            </router-link>
        </ZoomImage>

        <div v-else class="preview-item">

            <div class="preview-item-image">

                <RatingBlock v-if="item.rating" :rating="item.rating" />
                <ZoomImage>
                    <router-link :to="routeItem" class="link-image"></router-link>
                    <ImagePreview v-if="item.img" loading="lazy" :src="item.img" width="216" height="308" alt="" />
                    <ImagePreview v-else loading="lazy" :src="defaultPosterImg" width="216" height="308" alt="" />
                    
                </ZoomImage>
            </div>


            <h3 class="preview-item-heading">
                <router-link :to="routeItem">
                    {{ item.name }}
                </router-link>

            </h3>
            <p v-if="item.year" class="preview-item-info">
                {{ item.year }}, {{ item.type ? types[item.type] : '' }}
            </p>
            <p v-if="item.genres || item.genres?.length" class="preview-item-genres">
                {{ item.genres }}
            </p>

        </div>
    </template>
    </div>
   
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import defaultPosterImg from '@/shared/assets/default-poster.jpg';
import type { iCategoryItem } from '@/shared/lib/types';
import type { ItemType } from '@/shared/lib/types';
import ImagePreview from '@/shared/ui/ImagePreview/ImagePreview.vue';
import RatingBlock from '@/shared/ui/RatingBlock/RatingBlock.vue';
import SkeletItem from '@/shared/ui/SkeletItem/SkeletItem.vue';
import ZoomImage from '@/shared/ui/ZoomImage/ZoomImage.vue';

const types: { [key in ItemType]?: string } = {
    FILM: 'Фильм',
    TV_SERIES: 'Сериал',
    MULT: 'Мультфильм',
};

interface CategoryPreviewItemProps {
    item?: iCategoryItem
    skeleton?: boolean
    imageOnly?: boolean
}

const props = defineProps<CategoryPreviewItemProps>();

const routeItem = computed(() => {
    return `/film/${props.item?.id}`;
});

</script>

<style scoped lang="scss">
.preview-item-mini {
    margin: 0 0 2rem;
}

.preview-item {
    box-shadow: 2px 4px 15px 5px var(--color-black);
    position: relative;
    z-index: 10;


    .preview-item-image {
        position: relative;
        margin: 0 0 2rem;

        .link-image {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 3;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
    }

    .preview-item-heading {
        margin: 0 0 2rem;

    }

    .preview-item-info,
    .preview-item-genres {
        font-size: var(--size-sm);
        margin: 0;
    }

}
</style>