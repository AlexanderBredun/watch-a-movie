<template>
   <section class="section-featured ">
        <div class="wrapper">
            <div class="featured-slogan">
                <h1>
                    Смотрите все все лучшее у нас!
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur at dolor dolorem eveniet illum. dipisci aspernatur at dolor dolorem eveniet illum.
                </p>
                <AppButton tag="router-link" to="/movies">
                    Смотреть все
                </AppButton>
            </div>
        </div>
        
        <div v-if="data?.length" class="featured-movies-sliders">
            <InfiniteCaruselle class="infinite-caruselle">
                <ul>
                    <li v-for="movie in data.slice(0, 10)" :key="movie.id">
                        <CategoryPreviewItem :item="movie" image-only />
                    </li>

                </ul>
            </InfiniteCaruselle>
            <InfiniteCaruselle reverse class="infinite-caruselle">
                <ul>
                    <li v-for="movie in data.slice(10, 20)" :key="movie.id">
                        <CategoryPreviewItem :item="movie" image-only />
                    </li>
                </ul>
            </InfiniteCaruselle>
            <InfiniteCaruselle  class="infinite-caruselle">
                <ul>
                    <li v-for="movie in data.slice(20, 30)" :key="movie.id">
                        <CategoryPreviewItem :item="movie" image-only />
                    </li>
                </ul>
            </InfiniteCaruselle>
            <InfiniteCaruselle reverse class="infinite-caruselle">
                <ul>
                    <li v-for="movie in data.slice(30, 40)" :key="movie.id">
                        <CategoryPreviewItem :item="movie" image-only />
                    </li>
                </ul>
            </InfiniteCaruselle>
        </div>

    </section>
   
</template>

<script setup lang="ts">

import { CategoryPreviewItem } from '@/entities/CategoryPreviewItem';
import { getMainMovies } from '@/shared/api/WatchAMovieService';
import { useFetch } from '@/shared/lib/hooks';
import type { iCategoryItem } from '@/shared/lib/types';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import InfiniteCaruselle from '@/shared/ui/InfiniteCaruselle/InfiniteCaruselle.vue';

const { data } = useFetch<iCategoryItem[]>(getMainMovies);

</script>

<style scoped lang="scss">
    .section-featured{
        position: relative;
        overflow: hidden;
        height: 100vh;
        min-height: 600px;
        @include md{
            overflow: unset;
        }

        .wrapper{
            height: 100%;

            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .featured-slogan{
            width: 100%;

            padding: 0;

            filter: drop-shadow(12px 9px 4px var(--color-black));

            position: relative;
            z-index: 10;
            @include sm{
                width: 55%;
                min-width: 55rem;
                padding: 5rem 5rem 5rem 0;
            }
            p{
                margin: 0 0 2rem;
            }
        }
        .featured-movies-sliders{
            position: absolute;
            right: auto;
            height: 100vh;
            overflow: hidden;
            top: 0;
            left: 50%;
            transform: translate3d(-50%, 0, 0);
            width: 100%;
            display: flex;
            justify-content: center;
            transform-origin: top;
            min-width: 450px;
            @include sm{
                right: 5rem;
                left: auto;
                transform: none;
                width: auto;
                justify-content: flex-start;
            }
            @include md{
                transform: perspective(15rem) rotateY(-6deg) skew(-15deg) scale(1.3);
            }
            &:before{
                content: '';
                display: block;
                top: 0;
                left: 50%;

                position: fixed;
                z-index: 2;
                transform: translate3d(-50%, -50%, 0);
                width: 120%;
                height: 30%;
                pointer-events: none;
                background: linear-gradient(rgb(30, 30, 30) 65%, rgba(30, 30, 30, 0) 100%);
            }
            &:after{
                content: '';
                display: block;
                bottom: 0;
                left: 50%;
                pointer-events: none;
                position: absolute;
                z-index: 2;
                transform: translate3d(-50%, 0, 0);
                width: 120%;
                height: 30%;
                background: linear-gradient(rgba(30, 30, 30, 0) 0%, rgb(30, 30, 30) 100%);
                @include md{
                    position: fixed;
                }
            }

            .infinite-caruselle{
                margin: 0 2rem 0 0;
                &:last-of-type{
                    margin: 0;
                }
            }
            ul{

                overflow: hidden;
                li{
                    max-width: 100px;
                    @include md{
                        max-width: 150px;
                    }
                    img{
                        display: block;
                        margin: 0 0 1rem;
                    }
                }
            }

        }
    }
</style>