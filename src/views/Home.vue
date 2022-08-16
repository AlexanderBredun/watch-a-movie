<template>
  <main id="home-page" style="overflow: hidden;">
    <ErrorBoundary>
      <FeaturedMovies/>
      <NewMovies/>
      <NewSeries/>
      <NewCartoons/>
    </ErrorBoundary>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ErrorBoundary from '@/components/ErrorBoundary.vue'
import {
  FeaturedMovies,
  NewCartoons,
  NewMovies,
  NewSeries
} from '@/components/screens/home';


export default defineComponent({
  name: 'Home',
  components: {
    FeaturedMovies,
    NewMovies,
    NewSeries,
    NewCartoons,
    ErrorBoundary
  },
  data(){
    return {

    }
  },
  mounted(){
   this.$store.dispatch('newMovies/getItems')
            .catch(() => {
              throw new Error('api error');
            });

    this.$store.dispatch('newSeries/getItems')
            .catch(() => {
              throw new Error('api error');
            });

   this.$store.dispatch('newCartoons/getItems')
            .catch(() => {
              throw new Error('api error');
            })
  },
});
</script>

