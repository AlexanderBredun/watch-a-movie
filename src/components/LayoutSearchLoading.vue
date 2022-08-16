<template>

    <Loader v-if="loading && !error || items === null" :size="80" class="loading" color="var(--color-white)" />
    <ErrorHelper v-else-if="error" />
    <template v-else>
        <h2 class="empty" v-if="!items.length">
            Ничего не найдено
        </h2>
        <template v-else>
           <slot></slot>
        </template>

    </template>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import Loader from '@/components/ui/Loader.vue'
    import ErrorHelper from '@/components/screens/ErrorHelper.vue'

    export default defineComponent({
        name: "LayoutSearchLoading",
        components: {
            Loader,
            ErrorHelper
        },
        props: {
            items: {
                type: [Array, null] as PropType<any[]>,
                required: true
            },
            loading: {
                type: Boolean,
                required: true
            },
            error: {
                type: Boolean,
                required: true
            },
        },
    })
</script>

<style scoped lang="scss">
    .loading, .empty{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 6rem auto;
        text-align: center;
    }
    
</style>