<template>
    <SingleItem :error="error">
        <SingleItemSkeleton v-if="loading && !error" />
        <SingleItemBody v-else-if="item">
            <template #image>
                <img width="360" height="540" :src="item.image ?? ''" alt="">
                <RatingBlock v-if="item.rating" :rating="item.rating" />
            </template>
            <template #aside-name>
                <h1>
                    {{ item.nameRu || item.nameOriginal }} ({{ item.year }})
                </h1>
                <p v-if="item.slogan">
                    {{ item.slogan }}
                </p>
                <ul class="item-buttons">
                    <li>
                        <AppButton tag="router-link" :to="`/watch/${$route.params.id}?name=${item.nameRu || item.nameOriginal}`" with-icon variant="slim">
                            <i class="far fa-play"></i>
                            <span>Смотреть</span>
                        </AppButton>
                    </li>
                    <li>
                        <WatchLaterButton :item="item" />
                    </li>
                    <li>
                        <FavoriteButton :item="item" />
                    </li>
                </ul>
            </template>
            <template #aside-details>
                <ItemDetails title="О фильме" :items="item.details" />
            </template>
            <template v-if="item.description" #description>
                <h2>
                    Описание
                </h2>
                <p>
                    {{ item.description }}
                </p>
            </template>
            <template #bottom-block>
                <TabsList v-slot="{ Tab }">
                    <component :is="Tab" class="tab-el" name="Актёры">
                        <h2>
                            Актёры <span class="count">({{ item.movieActors.length }})</span>
                        </h2>
                        <SliderPerson :items="item.movieActors" />
                    </component>

                    <component :is="Tab" v-if="item.itemSimilar.length" class="tab-el" name="Похожие">
                        <h2>
                            Похожие <span class="count">({{ item.itemSimilar.length }})</span>
                        </h2>
                        <SliderMovies :films="item.itemSimilar" />
                    </component>

                    <component :is="Tab" v-if="item.itemFacts.itemFactsLength" class="tab-el" name="Факты">

                        <div v-if="item.itemFacts.facts.length" class="movie-facts">
                            <h2>Знаете ли вы что...</h2>
                            <ItemFacts class="items-facts" :items="item.itemFacts.facts" />
                        </div>
                        <div v-if="item.itemFacts.bloopers.length" class="movie-bloopers">
                            <h2>Ошибки в фильме</h2>
                            <ItemFacts class="items-facts" :items="item.itemFacts.bloopers" />

                        </div>
                    </component>

                    <component :is="Tab" class="tab-el" name="Рецензии">
                        <h2>
                            Рецензии
                        </h2>
                        <ItemReviews :item-id="itemId" />
                    </component>
                </TabsList>

            </template>
        </SingleItemBody>

    </SingleItem>
</template>

<script setup lang="ts">
import { SingleItem, SingleItemSkeleton, SingleItemBody } from '@/widgets/SingleItemScreen';
import { SliderMovies } from '@/widgets/SliderMovies';
import { SliderPerson } from '@/widgets/SliderPerson';
import { FavoriteButton } from '@/features/FavoriteButton';
import { ItemReviews } from '@/features/ItemReviews';
import { WatchLaterButton } from '@/features/WatchLaterButton';
import { ItemDetails } from '@/entities/ItemDetails';
import { ItemFacts } from '@/entities/ItemFacts';
import type { tMovieExtracted } from '@/shared/lib/types';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import RatingBlock from '@/shared/ui/RatingBlock/RatingBlock.vue';
import TabsList from '@/shared/ui/TabsList/TabsList.vue';


interface SingleItemScreenProps {
    item?: tMovieExtracted | null
    loading: boolean
    error: boolean
    itemId: string
}

defineProps<SingleItemScreenProps>();


</script>

<style scoped lang="scss">
.movie-item-description {
    margin: 0 0 var(--margin-block);
}

.item-buttons {
    margin: 3rem 0 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    a,
    button {
        display: block;
    }

    li {
        margin: 0 2rem 2rem 0;
        width: auto;

        &:last-child {
            margin-right: 0;
        }
    }
}
</style>