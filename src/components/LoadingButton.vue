<template>
    <AppButton :class="{'loading': loading}">

        <template v-if="!loading">
            <slot></slot>
        </template>
        <Loader :size="30" color="var(--color-black-80)" v-else/>

    </AppButton>
</template>

<script>
    import AppButton from '@/components/ui/AppButton.vue'
    import Loader from '@/components/ui/Loader.vue'

    export default {
        name: "LoadingButton",
        components: {
            AppButton,
            Loader
        },
        props: {
            loading: Boolean
        }
    }
</script>

<style scoped lang="scss">
    .loading{
        pointer-events: none;
        min-width: 150px;

    }
</style>