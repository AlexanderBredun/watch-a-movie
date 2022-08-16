<template>
    <AddToListButton storage-name="watchLater" :item="item" >
        <template #not-added>
            <i class="fas fa-bookmark"></i>
            <span>Смотреть позже</span>
        </template>
        <template #added>
            <i class="fas fa-bookmark color-black"></i>
            <span>Буду смотреть</span>
        </template>
    </AddToListButton>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import AddToListButton from '@/components/ui/AddToListButton.vue'

    export default defineComponent({
        name: "WatchLaterButton",
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