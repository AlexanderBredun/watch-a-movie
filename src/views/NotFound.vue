<template>
    <ErrorHelper :error="404"/>
</template>

<script>
    import ErrorHelper from '@/components/screens/ErrorHelper.vue'

    export default {
        name: "NotFound",
        components: {
            ErrorHelper
        }
    }
</script>

<style scoped lang="scss">

</style>