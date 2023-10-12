<template>
   
    <Loader v-if="loading && !error || (items === null && !error)" :size="80" class="loading" color="var(--color-white)" />
    <slot v-else-if="error && $slots.errorSlot"  name="errorSlot"></slot>
    <div v-else-if="error && !$slots.errorSlot" class="error-internal-default">
        <h2 class="empty">
            Что-то пошло не так.<br>Попробуйте позже
        </h2>
    </div>
    <template v-else>
        <h2 class="empty" v-if="!items?.length">
            Ничего не найдено
        </h2>
        <template v-else>
           <slot></slot>
        </template>

    </template>
</template>

<script lang="ts" setup>
    
    import Loader from '@/shared/ui/Loader/Loader.vue';

    interface LayoutSearchLoadingProps{
        items?: null | Array<any>
        loading: boolean
        error: boolean
    }
    
    defineProps<LayoutSearchLoadingProps>();

  
</script>

<style scoped lang="scss">
    .loading, .empty{
        margin: 6rem auto;
        text-align: center;
    }
    
</style>