<template>
    <div class="items-all">
        <div class="wrapper">
            <div class="heading">
                <h2>
                   <slot name="heading"></slot>
                </h2>
                <p >
                   <slot name="sub-heading"></slot>
                </p>
            </div>

            <div class="items-all-content">
                <AppButton class="btn-open-filters" variant="hollow" aria-label="Открыть фильтры" @click.prevent="openedAside = true">
                    <i class="fas fa-filter"></i>
                </AppButton>
                <div class="items-all-content-aside" :class="{'opened-aside': openedAside}">
                    <AppButton class="close-btn " aria-label="Закрыть фильтры" variant="hollow" @click.prevent="openedAside = false">
                        <i class="fas fa-arrow-left"></i>
                        <span class="circle"></span>
                    </AppButton>
                    <slot name="content-aside"></slot>

                </div>

                <div class="items-all-content-main">
                    <slot name="content-main"></slot>
                </div>


            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';


const openedAside = ref(false);

</script>

<style scoped lang="scss">
    .items-all{
        margin: 0 0 10rem;
        .btn-open-filters{
            margin: 0 0 3rem;
            @include lg{
                display: none;
            }
        }
        .close-btn{
            margin: 0 0 3rem;
            @include lg{
                display: none;
            }
        }
        .wrapper{
            .heading{
                padding: 0 0 3rem;
                margin: 0 0 3rem;
                border-bottom: 1px solid var(--color-gray);
                h2{
                    margin: 0 0 2rem;
                }
                p{
                    margin: 0;
                }

            }

            .items-all-content{

                justify-content: space-between;
                align-items: flex-start;
                position: relative;
                @include lg{
                    display: flex;
                }
                .items-all-content-aside{
                    @include maxlg{
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        transform: translate3d(-100vw, 0, 0);
                        transition: .3s;
                        z-index: 10001;
                        padding: 30px;
                        overflow: auto;
                        background: var(--color-black-80);
                        &.opened-aside{
                            transform: translate3d(0, 0, 0);
                        }
                    }
                    @include lg{
                        width: 30%;
                        max-width: 37rem;
                    }

                }
                .items-all-content-main{


                    flex-grow: 1;
                    @include lg{
                        width: 64%;
                        margin: 0 0 0 2rem;
                    }
                }
            }

        }
    }
</style>