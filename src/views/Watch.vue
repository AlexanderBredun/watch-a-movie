<template>
    <ErrorHelper v-if="error" />
    <WatchScreen v-else :name="name" />
</template>

<script>
    import watchAMovieService from '@/services/WatchAMovieService.ts'
    import WatchScreen from '@/components/screens/watch/WatchScreen.vue'
    import ErrorHelper from '@/components/screens/ErrorHelper.vue'
    export default {
        name: "Watch",
        components: {
            WatchScreen,
            ErrorHelper
        },
        data(){
            return {
                name: null,
                error: false
            }
        },
        async mounted(){
            await watchAMovieService.getMovieBasicInfo(this.$route.params.id)
                .then(res => {
                    this.name = res.nameRu || res.nameOriginal
                })
                .catch(()=> this.error = true)
        }
    }
</script>

<style scoped lang="scss">

</style>