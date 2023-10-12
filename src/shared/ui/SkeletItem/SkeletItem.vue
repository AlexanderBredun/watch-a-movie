<template>
    <div class="skelet" :class="{'absolute': absolute, 'image': image}" :style="{
        '--sk-width': width,
        '--sk-height': height,
    }">

    </div>
</template>
  
<script lang="ts" setup>
interface Props {
    width?: string;
    height?: string;
    image?: boolean
    absolute?: boolean;
}
defineProps<Props>();
</script>
  
<style lang="scss" scoped>
.skelet {
    height: var(--sk-height, 20px);
    width: var(--sk-width, 100%);
    position: relative;
    overflow: hidden;
    background-color: #555353;
    margin: 0 0 1.5rem;
    border-radius: 2rem;

    isolation: isolate;
    &.absolute{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
    &.image{
        aspect-ratio: 2/3;
    }

    &:before {
        content: '';
        background-color: #413e3e;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;

    }

    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(90deg,
                rgba(#fff, 0) 0,
                rgba(#fff, 0.2) 20%,
                rgba(#fff, 0.3) 60%,
                rgba(#fff, 0));
        animation: shimmer 2s infinite;
        content: '';


    }

    &-img {
        min-height: 100px;
        @include aspect(1, 1);
        margin: 0 auto;
    }

    &-input {
        min-height: 40px;

    }

    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
}
</style>