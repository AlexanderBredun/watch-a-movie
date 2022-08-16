<template>
    <MovieScreen :item="item" :loading="loading" :error="error"/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import request  from 'axios';
    import watchAMovieService from '@/services/WatchAMovieService.ts'
    import { MovieScreen } from '@/components/screens/movie'
    import Pokedex from '@/types/tMovie.ts'


    interface tState {
        item: null | Pokedex
        loading: boolean
        error: number | null
    }


    export default defineComponent({
        name: "Movie",
        components: {
            MovieScreen
        },
        data(){
            return {
                item: null,
                loading: true,
                error: null
            } as tState
        },
        mounted(){

            if (localStorage.getItem('activeItem')) {
                const item = JSON.parse(localStorage.getItem('activeItem')!);

                if(item.id == this.$route.params.id){
                    this.item = item;
                    console.log(2);
                    this.loading = false;
                }
                else{
                   this.loadItem(this.$route.params.id)
                }
            }
            else{
               this.loadItem(this.$route.params.id)
            }

        },

        methods: {
            async loadItem(id){
                this.loading = true;
                console.log(1);
                await watchAMovieService.getActiveMovie(id)
                    .then(res => {
                        this.item = res;
                        localStorage.setItem('activeItem', JSON.stringify(res))
                    })
                    .catch((err: Error) => {
                        if (request.isAxiosError(err) && err.response) {
                            this.error = err.response.status;
                        }

                    });

                this.loading = false;
            }
        },


    })
</script>

<style scoped lang="scss">

</style>