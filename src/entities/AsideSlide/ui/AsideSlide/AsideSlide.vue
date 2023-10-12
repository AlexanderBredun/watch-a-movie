<template>
    <div class="slide-block " :class="{ 'slide-block-active': activeBar }" v-clkc-outside="onClickOutside">
        <button class="btn-blank slide-btn " :class="btnClass" @click.prevent="activeBar = !activeBar">
            <slot name="btn-content"></slot>
        </button>

        <Transition name="slide">
            <div v-if="activeBar" class="aside-slide" :class="asideClass">
                <button class="btn-blank close-btn " @click.prevent="activeBar = false">
                    <i class="fal fa-times fa-2x color-white icon-active-search"></i>
                    <span class="circle"></span>
                </button>
                <slot name="aside-content"></slot>
            </div>
        </Transition>

    </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import vClickOutside from 'click-outside-vue3';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

interface AsideSlideProps{
    btnClass?: string;
    asideClass?: string;
}

defineProps<AsideSlideProps>();

const activeBar = ref(false);

const vClkcOutside = vClickOutside.directive;
const route = useRoute();

watch(() => route, () => {
    activeBar.value = false;
});

function onClickOutside() {
    activeBar.value = false;
}

</script>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease;

}

.slide-enter-from,
.slide-leave-to {
    transform: translate3d(100vw, 0, 0);
}

.slide-block {

    .slide-btn {
        position: relative;
        z-index: 1;
    }

    .aside-slide {
        position: fixed;
        background: lighten(#1E1E1E, 10%);
        height: 100%;
        width: 100%;
        z-index: 2000;
        max-width: 600px;
        transition: .3s ease-in-out;
        top: 0;
        right: 0;
        margin: 0;
        padding: 7px 20px 20px;


        @include sm {
            padding: 70px 20px 20px;
        }

        .close-btn {
            position: absolute;
            top: 2rem;
            right: 2rem;
        }

    }
}
</style>