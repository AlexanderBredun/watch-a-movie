<template>

    <Slider class="similar-slider">
        <swiper-slide  v-for="(item, i) in films" :key="i">
            <CategoryPreviewItem class="similar-slider-item" :item="item" />
        </swiper-slide>

    </Slider>
</template>

<script>
    import Slider from '@/components/ui/Slider.vue'
    import { CategoryPreviewItem } from '@/components/CategoryPreview'
    import { SwiperSlide } from 'swiper/vue/swiper-vue';

    export default {
        name: "MovieSimilarSlider",
        components: {
            Slider,
            CategoryPreviewItem,
            SwiperSlide
        },
        props: {
            films: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .similar-slider .similar-slider-item{
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