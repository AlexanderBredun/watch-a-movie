<template>
    <div class="slider-holder">
        <swiper v-bind="(options as typeof Swiper)" :modules="[Navigation]">
            <slot name="default" :Swiper-Slide="SwiperSlide"></slot>
            <template v-slot:container-end>
                <div class="slider-nav">
                    <button ref="prevBtn" class="carousel__prev">
                        <i class="fas fa-angle-left"></i>
                    </button>
                    <button ref="nextBtn" class="carousel__next">
                        <i class="fas fa-angle-right"></i>
                    </button>
                </div>
            </template>

        </swiper>
    </div>
</template>

<script setup lang="ts">
import { Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';



defineSlots<{
    default(props: { SwiperSlide: typeof SwiperSlide }): any
}>();

interface SliderInstanceProps {
    options?: SwiperOptions
}

const props = withDefaults(defineProps<SliderInstanceProps>(), {
    options: () => ({
        slidesPerView: 'auto',
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        // Navigation arrows
        navigation: {
            nextEl: '.slider-holder .carousel__next',
            prevEl: '.slider-holder .carousel__prev',
        },

    })
});


</script>

<style scoped lang="scss">
.slider-holder {
    :deep(.swiper) {
        padding: 6rem 0 0;

        .slider-nav {
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            @include lg {
                right: 20px;
            }

            .carousel__next,
            .carousel__prev {
                transform: none;
                position: unset;
                background: var(--color-blue);
                color: var(--color-black);
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                border: none;
                transition: .3s;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    background: var(--color-blue-120);
                    color: var(--color-white);
                }

                &.swiper-button-disabled {
                    background: var(--color-gray);
                }
            }

            .carousel__next {
                margin: 0 0 0 2rem;
            }
        }

        .swiper-slide {
            width: 22rem;


        }
    }
}
</style>