<template>
    <div class="search-results">

        <TabsItem @changed="tabChanged" >
            <SearchResultSingleTab v-for="(tab, i) in tabs" :key="i" :is-active="selectedTab === tab.heading" :heading="tab.heading" :method="tab.method" />
        </TabsItem>
    </div>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';

    import TabsItem from '@/components/ui/TabsItem.vue'
    import SearchResultSingleTab from '@/components/SearchResultSingleTab.vue'


    export default defineComponent({
        name: "SearchResults",
        components: {
            TabsItem,
            SearchResultSingleTab
        },
        data: ()=> {
            return {
                selectedTab: 'Фильмы',
                tabs: [
                    {
                        heading: 'Фильмы',
                        method: 'filmsFilter'
                    },
                    {
                        heading: 'Сериалы',
                        method: 'seriesFilter'
                    },
                    {
                        heading: 'Мультфильмы',
                        method: 'cartoonsFilter'
                    },
                ]
            }
        },
        methods: {
            tabChanged (selectedTab) {
                this.selectedTab = selectedTab.tab.name;
            }
        }
    })
</script>

<style scoped lang="scss">
    .search-results{
        margin: 2rem 0 0;
        @include sm{
            margin: 5rem 0 0;
        }
        :deep(){
            .tabs-wrapper{
                margin: 0;
            }
            .tabs-component-panels{
                margin-top: 2rem;
            }
            .tabs-component-tabs{
                justify-content: space-between;
            }
        }
    }
</style>