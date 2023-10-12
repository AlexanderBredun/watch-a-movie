<template>

    <SliderInstance class="persons-slider" v-slot="{SwiperSlide}">
        <component :is="SwiperSlide"  v-for="(item, i) in items" :key="i">
            <PersonPreview class="movies-slider-item" :item="item" />
        </component>

    </SliderInstance>
</template>

<script setup lang="ts">
import { PersonPreview } from '@/entities/PersonPreview';
import type { tStaffRaw } from '@/shared/lib/types';
import SliderInstance from '@/shared/ui/SliderInstance/SliderInstance.vue';

interface SliderMoviesProps{
    items: tStaffRaw[]
}

defineProps<SliderMoviesProps>();

</script>

<style scoped lang="scss">
   
</style>