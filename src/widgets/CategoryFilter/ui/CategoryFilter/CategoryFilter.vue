<template>
    <div class="filters">
        <h2>
            Фильтры
        </h2>
        <div class="list-active-filters">
            <span v-if="filters.keyword">
                Слова: {{ filters.keyword }}
            </span>
            <span>
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
                <AppInput v-model="keyword" type="text" placeholder="Введите слово из названия" />
            </div>

            <div v-if="exclude('movieYears')" class="filters-block">
                <h3 class="filters-heading">
                    Года производства
                </h3>
                <AppInputSlider :max="filters.defs.movieYears.max" :min="filters.defs.movieYears.min"
                                v-model="movieYears" />
            </div>

            <div v-if="exclude('movieRating')" class="filters-block">
                <h3 class="filters-heading">
                    Рейтинг
                </h3>
                <AppInputSlider :max="filters.defs.movieRating.max" :min="filters.defs.movieRating.min"
                                v-model="movieRating" />
            </div>
            <div v-if="exclude('movieGenre') && genres" class="filters-block">
                <h3 class="filters-heading">
                    Жанры
                </h3>
                <AppSelect v-model="movieGenre" default-title="Выберите жанр" :options="genres" />
            </div>
            <div v-if="exclude('movieCountry') && countries" class="filters-block">
                <h3 class="filters-heading">
                    Страны
                </h3>
                <AppSelect v-model="movieCountry" default-title="Выберите страну" :options="countries" />
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

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { tFilters } from '@/shared/lib/types';
import { filterDefault } from '@/shared/lib/utils';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import AppInput from '@/shared/ui/AppInput/AppInput.vue';
import AppInputSlider from '@/shared/ui/AppInputSlider/AppInputSlider.vue';
import AppSelect from '@/shared/ui/AppSelect/AppSelect.vue';
import { useCategoryFilterStore } from '../../store/categoryFilterStore';

const filtersStore = useCategoryFilterStore();
const { countries, genres } = storeToRefs(filtersStore);

filtersStore.getFilterData();

const filters = ref<tFilters>(JSON.parse(JSON.stringify(filterDefault)));

const mapField = <T extends keyof tFilters>(field: T) => {
    return {
        get() {
            return filters.value[field];
        },
        set(value: tFilters[T]) {
           
            filters.value[field] = value;
        }
    };
};

interface CategoryFilterProps {
    excludeFields?: Array<keyof tFilters>
}

const props = defineProps<CategoryFilterProps>();
const emit = defineEmits<{
    (event: 'sendFilters', f: tFilters): void
}>();
const route = useRoute();
const router = useRouter();



onMounted(() => {
    if (route.query.filters) {
       
        try {
            const filtersParsed: tFilters = JSON.parse(route.query.filters.toString());
            filters.value = { ...filters.value, ...filtersParsed };
        }
        catch (e) {
            console.log(e);
            filters.value = JSON.parse(JSON.stringify(filterDefault));
        }

    }
    sendFilters();
});


const movieYears = computed({
    get() {
        return filters.value.movieYears;
    },
    set(val) {
        filters.value.movieYears.max = val.max;
        filters.value.movieYears.min = val.min;
    }
});
const movieRating = computed({
    get() {
        return filters.value.movieRating;
    },
    set(val) {
        filters.value.movieRating.max = val.max;
        filters.value.movieRating.min = val.min;
    }
});
const keyword = computed(mapField('keyword'));
const movieGenre = computed(mapField('movieGenre'));
const movieCountry = computed(mapField('movieCountry'));
const genreName = computed(() => genres.value?.find(el => el.id.toString() === movieGenre.value)?.text);
const countryName = computed(() => countries.value?.find(el => el.id.toString() === movieCountry.value)?.text);

function exclude<T extends keyof tFilters>(fieldName: T) {
    return !props.excludeFields?.some(el => el === fieldName);
}
function filtersReset() {
    filters.value = JSON.parse(JSON.stringify(filterDefault));
    const querys = {
        ...route.query,
        filters: undefined
    };

    router.push({ path: route.fullPath, query: querys });
}
function sendFilters(e?: Event) {
   
    emit('sendFilters', filters.value);

    if (e?.target) {
        const activeFilters = Object.entries(filters.value)
            .filter(([key, value]) => {
                if (typeof value === 'object') {
                    return JSON.stringify(value) !== JSON.stringify(filterDefault[key as keyof tFilters]);
                }
                return value as tFilters[keyof tFilters] !== filterDefault[key as keyof tFilters];
            });

        const querys = {
            ...route.query,
            filters: activeFilters.length ? JSON.stringify(Object.fromEntries(activeFilters)) : undefined
        };

        router.push({ path: route.fullPath, query: querys });

    }

}

</script>

<style scoped lang="scss">
.filters {
    .list-active-filters {
        margin: 0 0 6rem;

        span {
            border: 1px solid var(--color-white);
            padding: .5rem 1rem;
            display: inline-block;
            margin: 0 1rem 1rem 0;
            border-radius: 7px;
            word-break: break-all;
        }
    }

    .filters-block {
        margin: 0 0 3rem;
        padding: 0 0 3rem;
        border-bottom: 1px solid var(--color-gray);
    }

    .filters-btns {
        .filters-btn {
            width: 100%;
            display: block;
            margin: 0 0 3rem;

            &:last-of-type {
                margin: 0;
            }
        }
    }
}
</style>