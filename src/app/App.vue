<script setup lang="ts">
import { RouterView } from 'vue-router';
import { HeaderApp } from '@/widgets/Header';
</script>

<template>
   <HeaderApp />
  <main id="main">
    <router-view :key="$route.fullPath"/>
  </main>
</template>

<style scoped lang="scss">

</style>
