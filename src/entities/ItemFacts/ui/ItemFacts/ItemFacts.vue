<template>
    <div ref="scrollBlock" class="show-more-block">

        <p v-for="(item, i) in slicedItems" :key="i" :class="{ 'spoiler': item.spoiler }" @click="removeSpoiler"
           v-html="item.text"></p>
        <AppButton variant="slim" class="btn-show-more" v-if="items.length !== slicedItems.length"
                  @click.prevent="page += 1">
            Показать еще <i class="far fa-angle-down"></i>
        </AppButton>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { MovieFactsSingleItem } from '@/shared/lib/types';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';


interface ItemFactsProps {
    items: MovieFactsSingleItem[]
}

const props = defineProps<ItemFactsProps>();

const page = ref<number>(1);

const slicedItems = computed(() => props.items.slice(0, 10 * page.value));

function removeSpoiler(e: Event) {
    (e.target as HTMLElement).classList.remove('spoiler');
}
</script>

<style scoped lang="scss">
.show-more-block {
    .btn-show-more {
        margin: 4rem 0 0;

    }

    :deep(a) {
        text-decoration: underline;

        &:hover {
            text-decoration: none;
        }
    }

    p {
        padding: 2rem;
        margin: 0;
        border-bottom: 1px solid var(--color-blue);
    }

    .spoiler {
        user-select: none;
        position: relative;

        &:before {
            content: 'Тут есть стойлеры, нажмите чтобы увидеть';

            position: absolute;
            backdrop-filter: blur(10px);
            width: 100%;
            height: 100%;

            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 12;
            filter: blur(0);
        }
    }
}</style>