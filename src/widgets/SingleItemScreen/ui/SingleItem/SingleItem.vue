<template>
    <ErrorHelper v-if="error" :error="500" />
    <section v-else class="section-movie space-header">

        <div class="wrapper">
            <BackButton />
            <slot></slot>
           
        </div>
    </section>
</template>

<script setup lang="ts">
import { ErrorHelper } from '@/entities/ErrorHelper';
import BackButton from '@/shared/ui/BackButton/BackButton.vue';

interface SingleItemScreenProps {
   
    error: boolean
}

defineProps<SingleItemScreenProps>();

</script>

<style scoped lang="scss">

</style>