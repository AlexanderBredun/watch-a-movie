<template>
    <section class="not-found-page ">
        <div class="wrapper">
            <BackButton v-if="error === 404" class="btn-back"/>
            <div class="content">
                <template v-if="error === 404">
                    <h2>
                        Страница не найдена
                    </h2>
                </template>
                <template v-else>
                    <h2>
                        Что-то пошло не так(
                    </h2>
                    <h3>
                        Попробуйте обновить страницу или попробуйте позже
                    </h3>
                </template>
            </div>
        </div>
    </section>

</template>

<script setup lang="ts">
    import BackButton from '@/shared/ui/BackButton/BackButton.vue'

    interface ErrorHelperProps{
        error?: 404 | 500
    }
    
    defineProps<ErrorHelperProps>()

</script>

<style scoped lang="scss">
    .not-found-page {

        height: calc(100vh - 13rem - 96px);


        .wrapper {
            position: relative;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .btn-back {
                position: absolute;
                top: 0;
                left: 20px;
            }
            .content{
                text-align: center;
            }

        }

    }
</style>