<template>
    <AddToListButton storage-name="favoriteList" :item="item" >
        <template #not-added>
            <i class="fas fa-heart"></i>
            <span>В избранное</span>
        </template>
        <template #added>
            <i class="fas fa-heart color-black" ></i>
            <span>В избранном</span>
        </template>
    </AddToListButton>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import AddToListButton from '@/components/ui/AddToListButton.vue'

    export default defineComponent({
        name: "FavoriteButton",
        components: {
            AddToListButton
        },
        props: {
            item: {
                type: Object,
                required: true
            }
        },
    })
</script>

<style scoped>

</style>