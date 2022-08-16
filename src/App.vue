<template>
  <Header />
  <main id="main">
    <router-view :key="$route.fullPath"/>
  </main>

</template>

<script lang="ts">
  import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

  export default defineComponent({
    components: {
      Header
    }
  })

</script>

<style lang="scss">
  @import "@/styles/_reset.scss";
@import "@/styles/_base.scss";

</style>
