<template>
    <PageWrapper>
        <CategoryScreen type="FILM">
            <template #heading>
                Все фильмы
            </template>

            <template #sub-heading>
                Поборка фильмов всего мира
            </template>
        </CategoryScreen>
    </PageWrapper>
</template>

<script lang="ts" setup>
import { CategoryScreen } from '@/widgets/CategoryScreen';
import { PageWrapper } from '@/entities/PageWrapper';



</script>

<style scoped></style>