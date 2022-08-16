<template>
    <div class="category-item" :class="[variant]">
        <div class="category-item-wrapper">
            <router-link class="category-item-link" :to="'film/' + item.id"></router-link>
            <div class="category-item-img zoom-img">
                <Rating v-if="item.rating" class="category-item-rating" :rating="item.rating" />
                <img :src="item.img" :alt="item.name" loading="lazy" class="">
            </div>

            <div class="category-item-content">
                <h3>
                    {{ item.name }}
                </h3>
                <p>
                    Год выпуска: {{ item.year }}
                </p>
                <p>
                    Жанры: {{ item.genres }}
                </p>
            </div>
            <div class="category-item-aside">

                <WatchLaterButton class="category-item-btn" :item="item" />
                <FavoriteButton class="category-item-btn" :item="item" />
            </div>
        </div>


    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Rating from '@/components/Rating.vue'
    import WatchLaterButton from '@/components/WatchLaterButton.vue'
    import FavoriteButton from '@/components/FavoriteButton.vue'

    export default defineComponent({
        name: "CategoryItem",
        components: {
            Rating,
            WatchLaterButton,
            FavoriteButton
        },
        props: {
            variant: String,
            item: {
                type: Object,
                required: true
            }
        }
    })
</script>

<style scoped lang="scss">
    .category-item{
        transition: .3s;
        padding: 3rem;
        position: relative;
        &:before{
            content: '';
            display: block;
            width: calc(100% - 6rem);
            height: 1px;
            background: var(--color-gray);
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translate3d(-50%, 0, 0);

        }
        &:hover{
            background: var(--color-black-80);
            box-shadow: -2px -2px 6px var(--color-blue), 2px 2px 6px var(--color-blue-120);
            border-radius: 12px;
            &:before{
                content: none;
            }
        }

        &.searchBar{
            padding: 1.5rem;
            &:hover{
                box-shadow: none;
            }
            .category-item-aside{
                display: none;
            }
            .category-item-img{
                width: 80px;
                height: 125px;
            }
            .category-item-content{
                h3{
                    margin-bottom: 1.5rem;
                }
                p{
                    margin: 0 0 1rem;
                }
            }
        }

        &-wrapper{
            justify-content: space-between;
            align-items: center;
            position: relative;
            @include sm{
                display: flex;
            }

        }
        &-link{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;

        }
        &-btn{
            position: relative;
            z-index: 2;
        }
        &-img{
            width: 150px;
            height: 200px;
            position: relative;
            background: var(--color-blue);

            img{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                object-fit: cover;
                aspect-ratio: 2/3;
            }
        }
        &-content{

            margin: 3rem 0 0;
            @include sm{
                width: 50%;
                flex-grow: 1;
                margin: 0 2rem;
            }
            p{
                &:last-of-type{
                    margin: 0;
                }
            }
        }
        &-aside{
            width: 200px;

            @include maxmd{
                position: absolute;
                top: 0;
                right: 0;
                width: auto;
            }
            .category-item-btn{
                width: 100%;
                margin: 0 0 2rem;
                &:last-of-type{
                    margin: 0;
                }
                :deep(.with-icon span){
                    @include maxmd{
                        display: none;
                    }
                }
            }
            
        }
        &-rating{
            top: 1rem;
            right: 1rem;
        }
    }
</style>