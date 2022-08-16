<template>
    <CartoonsScreen/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CartoonsScreen from '@/components/screens/cartoons/CartoonsScreen.vue'

    export default defineComponent({
        name: "Cartoons",
        components: {
            CartoonsScreen
        },
        mounted(){
            this.$store.dispatch('getFilterData')
        }
    })
</script>

<style scoped>

</style>