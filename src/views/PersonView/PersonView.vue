<template>
    <PersonViewSingleItem :item="data" :loading="loading" :error="error" :item-id="itemId" />
 </template>
 
 <script setup lang="ts">
 import { useRoute } from 'vue-router';
 import { getActivePerson } from '@/shared/api/WatchAMovieService';
 import { useFetch } from '@/shared/lib/hooks';
 import type { tPerson } from '@/shared/lib/types';
 import PersonViewSingleItem from './ui/PersonViewSingleItem/PersonViewSingleItem.vue';
 
 const route = useRoute();
 const itemId = typeof route.params.id === 'string' ? route.params.id : route.params.id[0];
 const { data, error, loading } = useFetch<tPerson>(()=> getActivePerson(itemId));
 
 </script>
 
 <style scoped lang="scss">
 .movie-item-description {
     margin: 0 0 var(--margin-block);
 }
 </style>