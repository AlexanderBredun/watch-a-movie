<template>
    <div class="carusel-infinite" :style="[reverse ? 'animation-direction: reverse' : '']">
        <slot></slot>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

interface InfiniteCaruselleProps {
    reverse?: boolean;
}

defineProps<InfiniteCaruselleProps>();

</script>

<style lang="scss" scoped>
.carusel-infinite {
    white-space: nowrap;

    animation: slideInfinite-mob 180s linear infinite forwards;

    @include md {
        animation: slideInfinite 40s linear infinite forwards;
    }

    &:hover {
        animation-play-state: paused;
    }
}

@keyframes slideInfinite {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(0, -148%, 0);
    }
}

@keyframes slideInfinite-mob {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(0, -178%, 0);
    }
}</style>
