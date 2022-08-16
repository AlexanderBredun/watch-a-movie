<template>
    <MoviesScreen/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import MoviesScreen from '@/components/screens/movies/MoviesScreen.vue'

    export default defineComponent({
        name: "Movies",
        components: {
            MoviesScreen
        },
        mounted(){
            this.$store.dispatch('getFilterData')
        }
    })
</script>

<style scoped>

</style>