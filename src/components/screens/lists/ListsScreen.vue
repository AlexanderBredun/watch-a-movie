<template>
    <TabsItem>

        <Tab class="tab-el"  name="Смотреть позже">
            <div class="wrapper">
                <ListSingle heading="Смотреть позже" :list="listWatchLater" />
            </div>
        </Tab>
        <Tab class="tab-el"  name="Избранные">
            <div class="wrapper">

                <ListSingle heading="Избранные" :list="favoriteList" />
            </div>
        </Tab>
    </TabsItem>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import TabsItem from '@/components/ui/TabsItem.vue'
    import ListSingle from './ListSingle.vue'
    import {Tab} from 'vue3-tabs-component';


    export default defineComponent({
        name: "ListsScreen",
        components: {
            TabsItem,
            Tab,
            ListSingle
        },
        data: ()=> {
            return {
                listWatchLater: null,
                favoriteList: null
            }
        },
        mounted(){
            this.listWatchLater = JSON.parse(localStorage.getItem('watchLater')!)?.reverse();
            this.favoriteList = JSON.parse(localStorage.getItem('favoriteList')!)?.reverse();
        }
    })
</script>

<style scoped>

</style>