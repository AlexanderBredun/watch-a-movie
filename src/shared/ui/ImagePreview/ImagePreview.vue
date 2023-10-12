<template>
    <div class="image-holder">
        <SkeletItem v-if="skeleton" absolute height="100%" />
        <img v-else v-bind="$attrs">
    </div>
</template>

<script lang="ts" setup>
import SkeletItem from '../SkeletItem/SkeletItem.vue';

interface ImagePreviewProps{
    skeleton?: boolean;
}

defineProps<ImagePreviewProps>();

defineOptions({
    inheritAttrs: false
});

</script>

<style lang="scss" scoped>
.image-holder {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 150%;
    background: var(--color-blue-120);

    img {
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
</style>