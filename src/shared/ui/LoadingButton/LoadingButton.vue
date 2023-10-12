<template>
    <AppButton :class="{'loading': loading}">

        <template v-if="!loading">
            <slot></slot>
        </template>
        <AppLoader :size="30" color="var(--color-black-80)" v-else/>

    </AppButton>
</template>

<script setup lang="ts">
    import AppButton from '../AppButton/AppButton.vue';
    import AppLoader from '../AppLoader/AppLoader.vue';

    interface LoadingButtonProps{
        loading: boolean
    }
    
    defineProps<LoadingButtonProps>();

</script>

<style scoped lang="scss">
    .loading{
        pointer-events: none;
        min-width: 150px;

    }
</style>../AppLoader/AppLoader.vue