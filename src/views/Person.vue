<template>
    <PersonScreen :item="item" :loading="loading" :error="error"/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import request  from 'axios';
    import watchAMovieService from '@/services/WatchAMovieService.ts'
    import { PersonScreen } from '@/components/screens/person'
    import tPerson from '@/types/tPerson.ts'


    interface tState {
        item: null | tPerson
        loading: boolean
        error: number | null
    }


    export default defineComponent({
        name: "Movie",
        components: {
            PersonScreen
        },
        data(){
            return {
                item: null,
                loading: true,
                error: null
            } as tState
        },
        mounted(){

            if (localStorage.getItem('activePerson')) {
                const item = JSON.parse(localStorage.getItem('activePerson')!);

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
                await watchAMovieService.getActivePerson(id)
                    .then(res => {
                        console.log(res);
                        this.item = res;
                        localStorage.setItem('activePerson', JSON.stringify(res))
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