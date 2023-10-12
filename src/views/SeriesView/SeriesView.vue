<template>
    <PageWrapper>
        <CategoryScreen type="TV_SERIES">
            <template #heading>
                Все сериалы
            </template>

            <template #sub-heading>
                Поборка сериалов всего мира
            </template>
        </CategoryScreen>
    </PageWrapper>
</template>

<script lang="ts" setup>
import { CategoryScreen } from '@/widgets/CategoryScreen';
import { PageWrapper } from '@/entities/PageWrapper';


</script>

<style scoped></style>