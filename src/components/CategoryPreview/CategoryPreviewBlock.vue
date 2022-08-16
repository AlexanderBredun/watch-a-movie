<template>
    <ul v-if="skeleton" class="category-items">
                <li class="item" v-for="(item, i) in skeletonCount" :key="i">
                     <CategoryPreviewItemSkeleton/>
                </li>
            </ul>
           
            <ul v-else class="category-items">
                <li class="item" v-for="item in items" :key="item.id">
                    <CategoryPreviewItem  :item="item"/>
                </li>
            </ul>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { PropType } from 'vue'
    import tMoviePreview from '@/types/tMoviePreview.ts'
   
    import CategoryPreviewItem from './CategoryPreviewItem.vue'
    import CategoryPreviewItemSkeleton from './CategoryPreviewItemSkeleton.vue'


    export default defineComponent({
        name: "CategoryPreviewBlock",
        components:{
            CategoryPreviewItem,
            CategoryPreviewItemSkeleton,
           
        },
        props: {
            items: {
                type: Array as PropType<tMoviePreview[]>,
                required: true
            },
            skeleton: Boolean,
            skeletonCount: {
                type:Number,
                default: 5
            }
        },
      
        
    })
</script>

<style scoped lang="scss">
 .category-items{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 6rem 3rem;
           margin-bottom: var(--margin-block);
            @include md{
                grid-template-columns: repeat(4, 1fr);
            }
             @include lg{
                grid-template-columns: repeat(5, 1fr);
            }
        }
  


</style>