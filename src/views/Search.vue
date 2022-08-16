<template>
    <SearchScreen/>
</template>

<script>
    import SearchScreen from '@/components/screens/search/SearchScreen.vue'
    export default {
        name: "Search",
        components: {
            SearchScreen
        },
        mounted(){
            this.$store.dispatch('getFilterData')
        }
    }
</script>

<style scoped>

</style>