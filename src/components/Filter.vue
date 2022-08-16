<template>
    <div class="filters">
        <h2>
            Фильтры
        </h2>
        <div class="list-active-filters">
            <span v-if="filters.keyword">
                Слова: {{filters.keyword }}
            </span>
            <span >
                Годы: {{ filters.movieYears.min }} - {{ filters.movieYears.max }}
            </span>
            <span>
                Рейтинг: {{ filters.movieRating.min }} - {{ filters.movieRating.max }}
            </span>

            <span v-if="filters.movieGenre">
                Жанр: {{ genreName }}
            </span>
            <span v-if="filters.movieCountry">
                Страна: {{ countryName }}
            </span>
        </div>
        <form action="#" id="filters-form" @submit.prevent="sendFilters">
            <div v-if="exclude('keyword')" class="filters-block">
                <h3 class="filters-heading">
                    Слово из названия
                </h3>
                <Input v-model="keyword" type="text" placeholder="Введите слово из названия"  />
            </div>

            <div v-if="exclude('movieYears')" class="filters-block">
                <h3 class="filters-heading">
                    Года производства
                </h3>
                <Slider :max="filters.defs.movieYears.max" :min="filters.defs.movieYears.min" v-model="movieYears"  />
            </div>

            <div v-if="exclude('movieRating')" class="filters-block">
                <h3 class="filters-heading">
                    Рейтинг
                </h3>
                <Slider :max="filters.defs.movieRating.max" :min="filters.defs.movieRating.min" v-model="movieRating"  />
            </div>
            <div v-if="exclude('movieGenre')" class="filters-block">
                <h3 class="filters-heading">
                    Жанры
                </h3>
                <Select v-model="movieGenre" default-title="Выберите жанр" :options="$store.state.genres" />
            </div>
            <div v-if="exclude('movieCountry')" class="filters-block">
                <h3 class="filters-heading">
                    Страны
                </h3>
                <Select v-model="movieCountry" default-title="Выберите страну" :options="$store.state.countries" />
            </div>
            <div class="filters-btns">
                <AppButton class="filters-btn" type="submit">
                    Применить
                </AppButton>

                <AppButton class="filters-btn" variant="hollow" @click.prevent="filtersReset">
                    Сбросить
                </AppButton>
            </div>

        </form>
    </div>



</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import { Input, Slider, Select } from '@/components/ui/form'
    import AppButton from '@/components/ui/AppButton.vue'

    import tFilters from '@/types/tFilters.ts'
    import { filterDefault } from '@/services/WatchAMovieService.ts'


    const mapField = (field)=> {
        return {
            get(){
                //@ts-ignore
                return this.filters[field]
            },
            set(value){
                //@ts-ignore
               this.filters[field] = value
            }
        }
    }

    export default defineComponent({
        name: "Filter",
        components: {
            Input,
            Slider,
            Select,
            AppButton
        },
        props: {
            excludeFields: {
                type: Array,
                default: ()=> ([])
            },
            modifyFields: {
                type: Array as PropType<Record<string, string | number>[]>,
                default: ()=> ([])
            }
        },
        data:()=>{
            return {
                filters: JSON.parse(JSON.stringify(filterDefault)) as tFilters
            }
        },
        emits: ['sendFilters'],
        mounted(){

            if(this.$route.query.filters){
                console.log('from storage');
                try {
                    const filtersParsed = JSON.parse(this.$route.query.filters.toString());
                    for (const prop in filtersParsed) {
                        console.log(prop);
                        this.filters[prop] = filtersParsed[prop]
                    }
                }
                catch(e){
                    console.log(e);
                    this.filters = JSON.parse(JSON.stringify(filterDefault))
                }

                //this.filters = JSON.parse(this.$route.query.filters.toString()) || JSON.parse(JSON.stringify(filterDefault));
            }
            this.modifyFields.forEach((el) => {
                this.filters[el.field] = el.value;
            })

            this.sendFilters(true)

        },
        computed: {
            genreName(){
                return this.$store.state.genres.find(el => el.id == this.movieGenre)?.text
            },
            countryName(){
                return this.$store.state.countries.find(el => el.id == this.movieCountry)?.text
            },
            movieYears: {
                get(){
                    return this.filters.movieYears
                },
                set(val){
                    this.filters.movieYears.max = val.maxValue;
                    this.filters.movieYears.min = val.minValue;
                }
            },
            movieRating: {
                get(){
                    return this.filters.movieRating
                },
                set(val){
                    this.filters.movieRating.max = val.maxValue;
                    this.filters.movieRating.min = val.minValue;
                }
            },

            keyword: mapField('keyword'),
            movieGenre: mapField('movieGenre'),
            movieCountry: mapField('movieCountry'),

        },
        methods: {
            exclude(fieldName){
              return !this.excludeFields.some(el => el === fieldName)
            },
            filtersReset(){
                this.filters = JSON.parse(JSON.stringify(filterDefault));
                const querys = {
                    ...this.$route.query,
                    filters: undefined
                };

                this.$router.push({path: this.$route.fullPath, query: querys})
            },
            sendFilters(e){
                console.log('filters send', e.target);
                this.$emit('sendFilters', this.filters)

                if(e.target){
                    const activeFilters = Object.entries(this.filters)
                        .filter(([key, value]) => {
                        if(typeof value === 'object'){
                            console.log(filterDefault[key].min);
                            return value.min !== filterDefault[key].min || value.max !== filterDefault[key].max
                        }
                       return  value !== filterDefault[key]
                    });

                    const querys = {
                        ...this.$route.query,
                       filters: activeFilters.length ? JSON.stringify(Object.fromEntries(activeFilters)) : undefined
                    };

                    this.$router.push({path: this.$route.fullPath, query: querys})

                    localStorage.setItem('itemFilters', JSON.stringify(this.filters))
                }

            }
        }

    })
</script>

<style scoped lang="scss">
    .filters{
        .list-active-filters{
            margin: 0 0 6rem;
            span{
                border: 1px solid var(--color-white);
                padding: .5rem 1rem;
                display: inline-block;
                margin: 0 1rem 1rem 0;
                border-radius: 7px;
                word-break: break-all;
            }
        }
        .filters-block{
            margin: 0 0 3rem;
            padding: 0 0 3rem;
            border-bottom: 1px solid var(--color-gray);
        }
        .filters-btns{
            .filters-btn{
                width: 100%;
                display: block;
                margin: 0 0 3rem;
                &:last-of-type{
                    margin: 0;
                }
            }
        }
    }
</style>