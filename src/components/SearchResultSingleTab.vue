<template>
    <Tab class="tab-el"  :name="heading">
        <h2>
            {{ heading }}
        </h2>
        <div class="search-bar-results-list">
            <CategoryList class="" variant="searchBar" :items="items" :loading="loading" :error="error" />
        </div>

        <router-link v-if="!loading && !error" class="link-watch-all" :to="{name: 'Search', query: {filters: stringifyQuery, m: this.method}}">
            Смотреть все
        </router-link>
    </Tab>
</template>

<script lang="ts">
    import debounce from 'lodash.debounce'
    import { mapState } from 'vuex'
    import { defineComponent } from 'vue';
    import {Tab} from 'vue3-tabs-component';
    import watchAMovieService from '@/services/WatchAMovieService.ts'
    import { CategoryList } from '@/components/CategoryList'
    import request  from 'axios';
    import { filterDefault } from '@/services/WatchAMovieService.ts'



    export default defineComponent({
        name: "SearchResultSingleTab",
        components: {
            Tab,

            CategoryList
        },
        props: {
            heading: {
                type: String,
                required: true
            },
            method: {
                type: String,
                required: true
            },
            isActive: Boolean
        },
        data: ()=> {
            return {
                items: null,
                loading: true,
                error: false,
                lastSearch: ''
            }
        },
        computed: {
            ...mapState({
                search: (state: any)=> state.search
            }),
            stringifyQuery(){
                return JSON.stringify({keyword: this.search})
            }
        },

        watch: {
            search:{
                immediate: true,
                handler(val) {
                    console.log(val);
                    if (this.isActive) {
                        this.lastSearch = val;
                        this.handleSearch(val, this)
                    }
                }
            },
            isActive(val){

                if(val === true && this.lastSearch !== this.search){
                    this.handleSearch(this.search, this)
                    this.lastSearch = this.search;
                }
            }
        },

        methods: {
            handleSearch: debounce(async (val, that)=> {
                console.log(1);
                const filters = JSON.parse(JSON.stringify(filterDefault));
                filters.keyword = val;
                that.loading = true;
                await watchAMovieService[that.method](1, filters, that.heading)
                    .then(res => {
                        that.items = res.items;
                    }).catch((err: Error) => {

                        if (request.isAxiosError(err) && err.code === "ERR_CANCELED") {
                            return;
                        }
                        that.error = true;
                        return err;
                    })
                    .finally(()=> {
                        setTimeout(()=> that.loading = false, 100)

                    })
            }, 400)
        }
    })
</script>

<style scoped lang="scss">
    .link-watch-all{
        margin: 2rem 0 0;
        display: block;
    }
    .tab-el{
        h2{
            margin: 0 0 2rem;
        }
    }
    .search-bar-results-list{
        overflow: auto;
        height: calc(100vh - 40rem);
        @include sm{
            height: calc(100vh - 400px);
        }

        :deep(){
            .category-item-wrapper{
                display: flex;

                .category-item-content{
                    @include maxsm{
                        margin: 0 0 0 1rem;
                        width: 66%;
                        p{
                            margin: 0 0 1rem;
                            font-size: 13px;
                        }
                    }
                }
            }
        }
        /* width */
        &::-webkit-scrollbar {
            width: 3px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: var(--color-black);
            border-radius: 10px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }
</style>