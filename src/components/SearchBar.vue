<template>
    <div class="search-bar " :class="{'search-bar-active': activeBar}"  v-click-outside="onClickOutside">
        <button class="btn-blank search-btn " @click.prevent="activeBar = !activeBar">
            <i class="fas fa-search  color-white"></i>
            <span class="circle"></span>
        </button>

        <div class="aside-search">

            <button class="btn-blank close-btn " @click.prevent="activeBar = false">

                <i class="fal fa-times fa-2x color-white icon-active-search"></i>
                <span class="circle"></span>
            </button>
            <div class="search-bar-input">
                <input type="text" placeholder="Поиск..." @input="handleInput" >
                <i class="fal fa-search fa-lg color-black search-icon"></i>
            </div>
            <SearchResults v-if="$store.state.search" />
        </div>
    </div>

</template>

<script lang="ts">
    import vClickOutside from 'click-outside-vue3'
    import { defineComponent } from 'vue';
    import SearchResults from '@/components/SearchResults.vue'

    export default defineComponent({
        name: "SearchBar",
        components: {
            SearchResults
        },
        directives: {
            clickOutside: vClickOutside.directive
        },
        data(){
            return {
                activeBar: false
            }
        },
        watch: {
            '$route':{
                handler(to, from){
                    this.activeBar = false;
                }
            },
        },
        methods: {
            handleInput(e){
                this.$store.commit('SET_SEARCH', e.target.value)
            },
            onClickOutside(){
                this.activeBar = false;
            }
        }
    })
</script>

<style scoped lang="scss">
    .search-bar{

        &.search-bar-active{
            .aside-search{

                transform: translate3d(0vw, 0 , 0);
            }
        }
        .search-btn{
            position: relative;
            z-index: 1;
            i{
                transition: .3s;
                font-size: 2.5rem;

            }



            &:hover{
                i{
                    color: var(--color-black);
                }
                .circle{
                    width: 5rem;
                    height: 5rem;
                }
            }
            .circle{
                position: absolute;
                border-radius: 50%;
                z-index: -1;
                background: rgba(255, 255, 255, .5);
                width: 0;
                height: 0;
                transition: .3s ease-out;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
            }
        }
        .aside-search{
            position: fixed;
            background: lighten(#1E1E1E, 10%);
            height: 100%;
            width: 100%;
            z-index: 2000;
            max-width: 600px;
            transition: .3s ease-in-out;
            top: 0;
            right: 0;
            margin: 0;
            padding: 7px 20px 20px;
            transform: translate3d(100vw, 0 , 0);
            @include sm{
                padding: 70px 20px 20px;
            }
            .close-btn{
                position: absolute;
                top: 2rem;
                right: 2rem;
            }

            .search-bar-input{
                position: relative;
                width: 90%;
                @include sm{
                    width: 100%;
                }
                input{
                    height: 6rem;
                    padding: 0 2rem 0 6rem;
                    width: 100%;
                    border-radius: 15px;
                    border: 0;

                }
                .search-icon{
                    position: absolute;
                    top: 50%;
                    left: 2rem;
                    transform: translate3d(0, -50%, 0);


                    border-radius: 15px;
                }
            }

        }
    }

</style>