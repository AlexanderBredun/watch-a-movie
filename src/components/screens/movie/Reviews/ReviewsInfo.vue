<template>
    <div  class="reviews-info">
        <div class="reviews-info-item">
            <a href="#" class="reviews-info-item-link" @click.prevent="setFilter('')"></a>
            <h2>
                {{ total.total }}
            </h2>
            <p>
                Всего
            </p>
        </div>
        <div class="reviews-info-item reviews-info-item--positive">
            <a href="#" class="reviews-info-item-link"  @click.prevent="setFilter('positive')"></a>
            <h2>
                {{ total.totalPositiveReviews }} <span class="fw-200">{{ calcPercents(total.totalPositiveReviews)}}%</span>
            </h2>
            <p>
                Положительных
            </p>
        </div>
        <div class="reviews-info-item reviews-info-item--negative">
            <a href="#" class="reviews-info-item-link"  @click.prevent="setFilter('negative')"></a>
            <h2>
                {{ total.totalNegativeReviews }} <span class="fw-200">{{ calcPercents(total.totalNegativeReviews)}}%</span>
            </h2>
            <p>
                Отрицательных
            </p>
        </div>
        <div class="reviews-info-item reviews-info-item reviews-info-item--neutral">
            <a href="#" class="reviews-info-item-link"  @click.prevent="setFilter('neutral')"></a>
            <h2>
                {{ total.totalNeutralReviews }} <span class="fw-200">{{ calcPercents(total.totalNeutralReviews)}}%</span>
            </h2>
            <p>
                Нейтральных
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ReviewsInfo",
        props: {
            total:{
                type: Object,
                required: true
            }
        },
        emits: ['setFilter'],
        methods: {
            calcPercents(num){
                if(num == 0) return 0;
                return ((num / this.total.total)*100).toFixed(2);
            },
            setFilter(val){
                this.$emit('setFilter', val)
            }
        },
    }
</script>

<style scoped lang="scss">
    .reviews-info{
        position: sticky;
        background: var(--color-black);
        top: 66px;
        padding: 2rem 0;
        width: 100%;
        margin: 0 0 3rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        z-index: 5;


        @include md{
            top: 90px;
            width: 300px;
            display: block;
            margin: 0 0 0 5rem;
            min-width: auto;

        }

        .reviews-info-item{
            position: relative;
            
            h2{
                text-align: center;
                margin: 0 0 1rem;
                @include md{
                    text-align: left;
                }
                span{
                    font-size: var(--size-sm);
                }
            }
            p{
                font-size: 10px;
                @include sm{
                    font-size: 13px;
                }
                @include md{
                    font-size: calc(var(--size-sm) + 2px);
                }
            }

            &--positive{
                h2, p{
                    color: rgb(25,250, 155);
                }
            }
            &--negative{
                h2, p{
                    color: rgb(255, 25, 55);
                }
            }
            &--neutral{
                h2, p{
                    color: rgb(220, 210, 250);
                }
            }
            &-link{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
        }
    }
</style>