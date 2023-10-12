<template>
    <AsideSlide class="search-bar" btn-class="search-btn" aside-class="aside-search">
        <template #btn-content>
            <i class="fas fa-search  color-white"></i>
            <span class="circle"></span>
        </template>
        <template #aside-content>
            <SearchInput />
        </template>
    </AsideSlide>
</template>

<script lang="ts" setup>
import { AsideSlide } from '@/entities/AsideSlide';
import SearchInput from '../SearchInput/SearchInput.vue';

</script>

<style scoped lang="scss">
.search-bar {

    :deep(.search-btn) {

        i {
            transition: .3s;
            font-size: 2.5rem;
        }

        &:hover {
            i {
                color: var(--color-black);
            }

            .circle {
                width: 5rem;
                height: 5rem;
            }
        }

        .circle {
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

    :deep(.aside-search) {

        .search-bar-input {
            position: relative;
            width: 90%;

            @include sm {
                width: 100%;
            }

            input {
                height: 6rem;
                padding: 0 2rem 0 6rem;
                width: 100%;
                border-radius: 15px;
                border: 0;

            }

            .search-icon {
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