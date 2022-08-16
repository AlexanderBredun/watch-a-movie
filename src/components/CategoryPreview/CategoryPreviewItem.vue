<template>
    <div v-if="imageOnly" class="preview-item-mini zoom-img">
        <router-link :to="routeItem">
            <img loading="lazy" :src="item.img" width="216" height="308" alt="">
        </router-link>
    </div>
    <div v-else class="preview-item">

        <div class="preview-item-image zoom-img">
            <router-link :to="routeItem" class="link-image"></router-link>
            <Rating v-if="item.rating" :rating="item.rating"/>
            <div class="image-holder">
                <img loading="lazy" :src="item.img" width="216" height="308" alt="">
            </div>

        </div>

        <h3 class="preview-item-heading">
            <router-link :to="routeItem">
                {{ item.name }}
            </router-link>

        </h3>
        <p v-if="item.year" class="preview-item-info">
            {{ item.year }}, {{ types[item.type] }}
        </p>
        <p v-if="item.genres || item.genres?.length" class="preview-item-genres">
            {{ item.genres }}
        </p>

    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { PropType } from 'vue'
    import tMoviePreview from '@/types/tMoviePreview.ts'
    import Rating from '@/components/Rating.vue'


    const types = {
        FILM: 'Фильм',
        TV_SERIES: 'Сериал',
        MULT: 'Мультфильм',
    };

    export default defineComponent({
        name: "CategoryPreviewItem",
        components: {
            Rating,

        },
        props: {
            item: {
                type: Object as PropType<tMoviePreview>,
                required: true
            },
            skeleton: Boolean,
            imageOnly: Boolean,
            mini: Boolean,
        },
       data(){
         return{
             types: {
                 FILM: 'Фильм',
                 TV_SERIES: 'Сериал',
                 MULT: 'Мультфильм',
             }
         }
       },
        computed: {

            routeItem(){
                return `/film/${this.item.id}`
            }
        }
    })
</script>

<style scoped lang="scss">
    .preview-item-mini{
        margin: 0 0 2rem;
    }
    .preview-item{
        box-shadow: 2px 4px 15px 5px var(--color-black);
        position: relative;
        z-index: 10;

        
        .preview-item-image{
            position: relative;
            margin: 0 0 2rem;
            .link-image{
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 3;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }

            .image-holder{
                position: relative;
                width: 100%;
                height: 0;
                padding-top: 150%;
               
                background: var(--color-blue-120);
                img{
                   width: 100%;
                height: 100%;

                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }

            }
        }
        .preview-item-heading{
            margin: 0 0 2rem;

        }
        .preview-item-info, .preview-item-genres{
            font-size: var(--size-sm);
            margin: 0;
        }

    }
</style>