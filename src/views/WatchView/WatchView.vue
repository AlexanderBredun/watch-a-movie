
<template>
    <div class="watch-screen">
        <div class="watch-top-nav">
            <BackButton variant="hollow" mini />
            <p v-if="$route.query.name">
                {{ $route.query.name }}
            </p>
        </div>

        <div :data-kinopoisk="$route.params.id" id="kinobd"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { BackButton } from '@/features/BackButton';

onMounted(() => {
    let script = document.createElement('script');
    script.setAttribute('src', 'https://kinobd.net/js/player_.js');
    document.head.appendChild(script);
});

</script>

<style scoped lang="scss">
   
    .watch-top-nav{
        padding: 0 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 0 2rem;
        p{
            margin: 0 0 0 2rem;
            width: 80%;
        }
    }
    #kinobd{
        height: calc(100vh - 123px) !important;

        #kinobd-iframe{
            height: 100% !important;
        }
    }
</style>