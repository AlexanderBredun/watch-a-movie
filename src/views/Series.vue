<template>
    <SeriesScreen/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import SeriesScreen from '@/components/screens/series/SeriesScreen.vue'

    export default defineComponent({
        name: "Series",
        components: {
            SeriesScreen
        },
        mounted(){
            this.$store.dispatch('getFilterData')
        }
    })
</script>

<style scoped>

</style>