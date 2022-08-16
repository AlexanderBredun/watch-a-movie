<template>
    <ListsScreen/>
</template>

<script>
    import ListsScreen from '@/components/screens/lists/ListsScreen.vue'

    export default {
        name: "Lists",
        components: {
            ListsScreen
        },
        mounted(){
            this.$store.dispatch('getFilterData')
        }
    }
</script>

<style scoped>

</style>