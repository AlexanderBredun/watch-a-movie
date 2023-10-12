<template>
  <PageWrapper id="home-page" style="overflow: hidden;">
    <HeroBlock />
    <CategoryPreview heading="Популярные фильмы" type-items="FILM" />
    <CategoryPreview heading="Популярные сериалы" type-items="TV_SERIES" />
    <CategoryPreview heading="Популярные мультфильмы" type-items="MULT" />
  </PageWrapper>
  
</template>

<script lang="ts" setup>
import { CategoryPreview } from '@/widgets/CategoryPreview';
import { PageWrapper } from '@/entities/PageWrapper';
import HeroBlock from '../HeroBlock/HeroBlock.vue';
</script>

<style lang="scss" scoped></style>