<template>
    <SingleItem :error="error">
        <SingleItemSkeleton v-if="loading && !error" />
        <SingleItemBody v-else-if="item">
            <template #image>
                <img width="360" height="540" :src="item.image ?? ''" alt="">

            </template>
            <template #aside-name>
                <h1>
                    {{ item.nameRu || item.nameEn }}
                </h1>
                <p v-if="item.nameRu">
                    {{ item.nameEn }}
                </p>

            </template>
            <template #aside-details>
                <ItemDetails title="О персоне" :items="item.details" />
            </template>
            <template #bottom-block>
                <TabsList v-slot="{ Tab }">

                    <component :is="Tab" v-if="item.films?.length" class="tab-el" name="Фильмы">
                        <h2>
                            Фильмы <span class="count">({{ item.films.length }})</span>
                        </h2>
                        <SliderMovies :films="item.films" />
                    </component>

                    <component :is="Tab" v-if="item.facts?.length" class="tab-el" name="Факты">
                        <h2>Знаете ли вы что...</h2>
                        <ItemFacts class="items-facts" :items="item.facts" />
                    </component>
                   
                </TabsList>

            </template>
        </SingleItemBody>

    </SingleItem>
</template>

<script setup lang="ts">
import { SingleItem, SingleItemSkeleton, SingleItemBody } from '@/widgets/SingleItemScreen';
import { SliderMovies } from '@/widgets/SliderMovies';
import { ItemDetails } from '@/entities/ItemDetails';
import { ItemFacts } from '@/entities/ItemFacts';
import type { tPerson } from '@/shared/lib/types';
import TabsList from '@/shared/ui/TabsList/TabsList.vue';


interface SingleItemScreenProps {
    item?: tPerson | null
    loading: boolean
    error: boolean
    itemId: string
}

defineProps<SingleItemScreenProps>();

</script>

<style scoped lang="scss">

</style>