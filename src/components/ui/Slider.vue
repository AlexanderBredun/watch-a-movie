<template>
    <div class="slider-holder">
        <swiper
                v-bind="options"
                @swiper="onSwiper"
                :modules="modules"
                navigation

        >
            <slot></slot>
            <div class="slider-nav">
                <button ref="prevBtn" class="carousel__prev">
                    <i class="fas fa-angle-left"></i>
                </button>
                <button ref="nextBtn" class="carousel__next">
                    <i class="fas fa-angle-right"></i>
                </button>
            </div>
        </swiper>
    </div>

</template>

<script>
    import { Navigation} from 'swiper';
    import { Swiper } from "swiper/vue/swiper-vue";
    import 'swiper/swiper.min.css'

    import {
        ref,
    } from 'vue';

    export default {
        name: "MovieSlider",
        components: {
            Swiper,

        },
        props: {
            options: {
                type: Object,
                default: ()=> ({
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    observer: true,
                    observeParents: true,
                    // Navigation arrows
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                })
            },
        },
        setup() {
            const prevBtn = ref(null);
            const nextBtn = ref(null);
            const onSwiper = (swiper) => {
                console.log(swiper);

                setTimeout(()=> {
                    console.log(prevBtn.value);

                    swiper.params.navigation.prevEl = prevBtn.value;

                    swiper.params.navigation.nextEl = nextBtn.value;

                    // Re-init navigation
                    swiper.navigation.destroy()
                    swiper.navigation.init()
                    swiper.navigation.update()
                })
            };

            return {
                prevBtn,
                nextBtn,
                onSwiper,
                modules: [Navigation],
            };
        },
    }
</script>

<style scoped lang="scss">
    .slider-holder{
        :deep(.swiper){
            margin-top: -6rem;
            padding: 8rem 0 0;
            .slider-nav{
                position: absolute;
                top: 0;
                right: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                @include lg{
                    right: 20px;
                }
                .carousel__next, .carousel__prev{
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
                    &:hover{
                        background: var(--color-blue-120);
                        color: var(--color-white);
                    }

                    &.swiper-button-disabled{
                        background: var(--color-gray);
                    }
                }
                .carousel__next{
                    margin: 0 0 0 2rem;
                }
            }
            .swiper-slide{
                width: 22rem;


            }
        }
    }


</style>