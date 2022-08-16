<template>
    <div class="carusel-infinite" :style="[reverse ? 'animation-direction: reverse' : null]">
        <slot></slot>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'InfiniteCaruselle',
        props: {
            reverse: Boolean
        },
        data() {
            return {}
        },
    }
</script>

<style lang="scss" scoped>
    .carusel-infinite {
        white-space: nowrap;

        animation: slideInfinite-mob 70s linear infinite both;
        @include md{
            animation: slideInfinite 140s linear infinite both;
        }
        &:hover{
            animation-play-state: paused;
        }
    }

    @keyframes slideInfinite {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(0, -251%, 0);
        }
    }
    @keyframes slideInfinite-mob {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(0, -178%, 0);
        }
    }
</style>
