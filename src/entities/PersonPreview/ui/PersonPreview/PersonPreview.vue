<template>
    <div class="actor-preview">
        <ZoomImage class="actor-image-holder">
            <router-link class="actor-img-link" :to="'/name/' + item.staffId"></router-link>
            <ImagePreview :src="item.posterUrl" loading="lazy" :alt="item.nameRu ?? ''" />
        </ZoomImage>

        <h3>
            <router-link :to="'/name/' + item.staffId">
                {{ item.nameRu || item.nameEn }}
            </router-link>

        </h3>
        <p>
            {{ item.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { tStaffRaw } from '@/shared/lib/types';
import ImagePreview from '@/shared/ui/ImagePreview/ImagePreview.vue';
import ZoomImage from '@/shared/ui/ZoomImage/ZoomImage.vue';

interface PersonPreviewProps {
    item: tStaffRaw
}

defineProps<PersonPreviewProps>();
</script>

<style scoped lang="scss">
.actor-preview {
    text-align: left;
    pointer-events: none;
    user-select: none;

    a {
        pointer-events: all;
    }

    .actor-image-holder {
        
        position: relative;
        margin: 0 0 1rem;
        

        .actor-img-link {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            z-index: 2;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

        }

       
    }

    h3 {
        margin: 0 0 1rem;
    }

    p {
        color: var(--color-gray);
        margin: 0;
        font-size: var(--size-sm);
    }
}
</style>