<template>
    <AppButton :variant="!alreadyInList ? 'slim hollow' : 'slim'" with-icon @click.prevent="saveToWatchLater">
        <slot v-if="!alreadyInList" name="not-added"></slot>
        <slot v-else name="added"></slot>

    </AppButton>
</template>

<script lang="ts" setup>

import { computed, onMounted, reactive } from 'vue';
import type { iCategoryItem, tListshIghlight, tMovieExtracted } from '@/shared/lib/types';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';

interface AddToListButtonProps {
    item: iCategoryItem | tMovieExtracted
    storageName: tListshIghlight
}
interface AddToListButtonData {
    list: iCategoryItem[]
}

const props = defineProps<AddToListButtonProps>();



const data = reactive<AddToListButtonData>({
    list: []
});

onMounted(() => {
    data.list = JSON.parse(localStorage.getItem(props.storageName)!) || [];
});

const alreadyInList = computed(() => data.list.some(el => el.id == props.item.id));

function saveToWatchLater() {
    if ('details' in props.item) {
        const { id, nameOriginal, nameRu, rating, year, image } = props.item;
        data.list = JSON.parse(localStorage.getItem(props.storageName)!) || [];
        if (alreadyInList.value) {
            data.list = data.list!.filter(el => el.id != props.item.id);
            localStorage.setItem(props.storageName, JSON.stringify(data.list));
        }
        else {
            const item:iCategoryItem  = {
                id,
                name: nameRu || nameOriginal,
                rating,
                year,
                img: image,
                genres: props.item.details.genres.value
            };
            data.list.push(item);
            localStorage.setItem(props.storageName, JSON.stringify(data.list));
        }
       
    }
    else {
        const { id, name, rating, year, img, genres } = props.item;
        data.list = JSON.parse(localStorage.getItem(props.storageName)!) || [];
        if (alreadyInList.value) {
            data.list = data.list!.filter(el => el.id != props.item.id);
            localStorage.setItem(props.storageName, JSON.stringify(data.list));
        }
        else {
            const item:iCategoryItem  = {
                id,
                name,
                rating,
                year,
                img,
                genres
            };
            data.list.push(item);
            localStorage.setItem(props.storageName, JSON.stringify(data.list));
        }
       
    }
}

</script>

<style scoped></style>