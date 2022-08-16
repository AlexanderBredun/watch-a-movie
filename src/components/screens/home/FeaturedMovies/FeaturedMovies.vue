<template>
    <FeaturedMoviesItem :items="items" />
</template>

<script>
    import watchAMovieService from '@/services/WatchAMovieService.ts'
    import FeaturedMoviesItem from './FeaturedMoviesItem'

    export default {
        name: "FeaturedMovies",
        components: {
            FeaturedMoviesItem
        },
        data(){
            return {
                items: []
            }
        },
        async mounted(){

            if (localStorage.getItem('featuredMovies')) {
                try {
                    this.items = JSON.parse(localStorage.getItem('featuredMovies'));
                } catch(e) {
                    localStorage.removeItem('featuredMovies');
                }
            }
            else{
                console.log('fetching featured');
                await watchAMovieService.getMainMovies()
                    .then(res => {
                        this.items = res;
                        localStorage.setItem('featuredMovies', JSON.stringify(res));

                    })
                    .catch(err =>  {

                        throw new Error('api error');
                    })
            }


        },

    }
</script>

<style scoped>

</style>