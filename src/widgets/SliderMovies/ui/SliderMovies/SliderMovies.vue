<template>

    <SliderInstance class="movies-slider" v-slot="{SwiperSlide}">
        <component :is="SwiperSlide"  v-for="(item, i) in films" :key="i">
            <CategoryPreviewItem class="movies-slider-item" :item="item" />
        </component>

    </SliderInstance>
</template>

<script setup lang="ts">
import { CategoryPreviewItem } from '@/entities/CategoryPreviewItem';
import type { iCategoryItem } from '@/shared/lib/types';
import SliderInstance from '@/shared/ui/SliderInstance/SliderInstance.vue';

interface SliderMoviesProps{
    films: iCategoryItem[]
}

defineProps<SliderMoviesProps>();

</script>

<style scoped lang="scss">
    .movies-slider .movies-slider-item{
        max-width: 22rem;
        :deep(.preview-item-image){
            width: 22rem;
            height: 32rem;
        }
        :deep(.image-holder){

            position: relative;
            margin: 0 0 1rem;
            img{
                display: block;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                object-fit: cover;
                width: 100%;
                height: 100%;

            }
        }
    }
</style>