<template>
    <section class="section-movie-skeleton space-header">
        <div class="wrapper">
            <BackButton style="opacity: 0; pointer-events: none"/>
            <div class="item-single">
                <div class="item-top">
                    <div class="item-image">

                    </div>
                    <div class="item-info">
                        <div class="item-name">
                            <h1>

                            </h1>
                            <p>

                            </p>
                        </div>
                        <div class="movie-item-details">
                            <h2>

                            </h2>
                            <div class="movie-item-detail-item">
                                <p class="title">

                                </p>
                                <p>

                                </p>
                            </div>
                            <div class="movie-item-detail-item">
                                <p class="title">

                                </p>
                                <p>

                                </p>
                            </div>
                            <div class="movie-item-detail-item">
                                <p class="title">

                                </p>
                                <p>

                                </p>
                            </div>
                            <div class="movie-item-detail-item">
                                <p class="title">

                                </p>
                                <p>

                                </p>
                            </div>
                            <div class="movie-item-detail-item">
                                <p class="title">

                                </p>
                                <p>

                                </p>
                            </div>
                            <div class="movie-item-detail-item">
                                <p class="title">

                                </p>
                                <p>

                                </p>
                            </div>
                            <div class="movie-item-detail-item">
                                <p class="title">

                                </p>
                                <p class="bordered">

                                </p>
                            </div>
                            <div class="movie-item-detail-item">
                                <p class="title">

                                </p>
                                <p class="bordered">

                                </p>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="movie-item-description">
                    <h2>

                    </h2>
                    <p>

                    </p>
                </div>

            </div>
        </div>
    </section>

</template>

<script>
    import { defineComponent } from 'vue';
    import BackButton from '@/components/ui/BackButton.vue'

    export default defineComponent({
        name: "MovieSkeleton",
        components: {
            BackButton,
        },

    })
</script>

<style scoped lang="scss">
    h1, h2, p, .item-image{
        height: 4rem;
        @include skeleton-anim;
    }
    .item-image{
        height: 37rem;
        width: 30rem;
        @include md{
            height: 47rem;
        }
    }
    h2{
        height: 3rem;
    }
    .movie-item-description{
        p{
            height: 7rem;
        }
    }
    .movie-item-details{
        .movie-item-detail-item{
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin: 0 0 1.5rem;
            p{
                margin: 0 3rem 0 0;
                height: 2rem;
                flex: 1;
                &:last-of-type{
                    margin: 0;
                }
            }
            .title{
                font-weight: 200;
                flex-grow: .2;
                opacity: .8;
                width: 17rem;
            }
        }
    }
</style>