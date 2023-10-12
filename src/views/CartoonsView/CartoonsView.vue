<template>
    <PageWrapper>
        <CategoryScreen type="MULT">
            <template #heading>
                Все мультфильмы
            </template>

            <template #sub-heading>
                Поборка мультфильмов всего мира
            </template>
        </CategoryScreen>
    </PageWrapper>
</template>

<script lang="ts" setup>
import { CategoryScreen } from '@/widgets/CategoryScreen';
import { PageWrapper } from '@/entities/PageWrapper';


</script>

<style scoped></style>