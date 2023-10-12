<template>
    <div class="pagination">
        <AppButton variant="slim"  class="btn-pagination" @click.prevent="$emit('changePage', 1)" :disabled="page <= 1">
            <i class="fas fa-chevron-double-left"></i>
        </AppButton>
        <AppButton variant="slim" class="btn-pagination" @click.prevent="$emit('changePage', page - 1)" :disabled="page <= 1">
            <i class="fas fa-chevron-left"></i>
        </AppButton>
        <p>
            {{ page }}/{{ totalPages }}
        </p>
        <AppButton variant="slim" class="btn-pagination" @click.prevent="$emit('changePage', page + 1)" :disabled="page >= totalPages">
            <i class="fas fa-chevron-right"></i>
        </AppButton>
        <AppButton variant="slim" class="btn-pagination" @click.prevent="$emit('changePage', totalPages)" :disabled="page >= totalPages">
            <i class="fas fa-chevron-double-right"></i>
        </AppButton>
    </div>
</template>

<script setup lang="ts">
    import AppButton from '@/shared/ui/AppButton/AppButton.vue';

    interface PaginationArrowsProps{
        page: number;
        totalPages: number;
    }
    
    defineProps<PaginationArrowsProps>();

    defineEmits<{
        (event: 'changePage', page: number): void
    }>();

</script>

<style scoped lang="scss">
    .pagination{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .btn-pagination{
            margin: 0 1rem 0 0;
        }
        p{
            margin: 0 1rem 0 0;
        }
    }
</style>