<template>
    <AppButton @click.prevent="goBack" :with-icon="!mini">
        <i class="fas fa-arrow-left"></i> <span v-if="!mini">Назад</span>
    </AppButton>
</template>

<script setup lang="ts">

import { computed } from 'vue';
import { useRouter } from 'vue-router';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';

interface BackButtonProps {
    mini?: boolean;
}

defineProps<BackButtonProps>();

const router = useRouter();

const hasHistory = computed(() => window.history.length > 2);

function goBack() {
    hasHistory.value ? router.go(-1) : router.push('/');
}

</script>

<style scoped lang="scss"></style>