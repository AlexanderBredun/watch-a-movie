<template>
    <div class="preview-item">
        <div class="preview-item-image">
        </div>

        <h3 class="preview-item-heading"></h3>
        <p class="preview-item-info"> </p>
        <p class="preview-item-genres" ></p>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    
    export default defineComponent({
        name: "CategoryPreviewItemSkeleton",
    
       
    })
</script>

<style scoped lang="scss">
    .preview-item{
        box-shadow: 2px 4px 15px 5px var(--color-black);
        position: relative;
        z-index: 10;

        .preview-item-image, .preview-item-heading, .preview-item-info, .preview-item-genres{
            @include skeleton-anim;
        }
        
        .preview-item-image{
           height: 30.8rem;
           width: 100%;

           background-size: 600px;
           margin: 0 0 3rem;


        }
        .preview-item-heading{
            height: 3rem;
            width: 100%;

            margin: 0 0 2rem;

        }
        .preview-item-info, .preview-item-genres{
            font-size: var(--size-sm);
            height: 1.5rem;
            width: 70%;
            margin: 0 0 1rem;

        }


    }
 

</style>