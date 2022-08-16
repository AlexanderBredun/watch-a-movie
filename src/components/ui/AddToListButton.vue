<template>
    <AppButton :variant="!alreadyInList ? 'hollow slim' : 'slim'" with-icon @click.prevent="saveToWatchLater" >
        <slot v-if="!alreadyInList" name="not-added"></slot>
        <slot v-else name="added"></slot>

    </AppButton>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import AppButton from '@/components/ui/AppButton.vue'

    interface tState1{
        list: any[]
    }

    export default defineComponent({
        name: "AddToListButton",
        components: {
            AppButton
        },
        props: {
            item: {
                type: Object,
                required: true
            },
            storageName: {
                type: String,
                required: true
            },
        },
        data:()=>{
            return {
                list: []
            } as tState1
        },
        mounted(){
            this.list = JSON.parse(localStorage.getItem(this.storageName)!) || [];

        },
        computed: {
            alreadyInList(){
                return this.list.some(el => el.id == this.item.id)
            }
        },
        methods: {
            saveToWatchLater(){
                const { id, nameRu, nameOriginal, rating, image, name, img, year } = this.item;
                this.list = JSON.parse(localStorage.getItem(this.storageName)!) || [];
                if(this.alreadyInList){
                    this.list = this.list!.filter(el => el.id != this.item.id);
                    localStorage.setItem(this.storageName, JSON.stringify(this.list))
                }
                else{
                    const item = {
                        id,
                        name: nameRu || nameOriginal || name,
                        rating,
                        year,
                        img: image || img,
                        genres: this.item.genres || this.item.details.genres.value
                    };

                    this.list.push(item);
                    localStorage.setItem(this.storageName, JSON.stringify(this.list))

                }



            }
        }
    })
</script>

<style scoped>

</style>