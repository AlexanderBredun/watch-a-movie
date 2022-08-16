<template>
    <Slider class="slider-movie-actors" >
        <swiper-slide  v-for="(item, i) in actors" :key="i">
            <MovieActor :item="item" />
        </swiper-slide>

    </Slider>
</template>

<script>
    import Slider from '@/components/ui/Slider.vue'
    import MovieActor from '@/components/MovieActor.vue'
    import { SwiperSlide } from 'swiper/vue/swiper-vue';

    export default {
        name: "MovieActorSlider",
        components: {
            Slider,
            MovieActor,
            SwiperSlide
        },
        props: {
            actors: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>