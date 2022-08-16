<template>
    <div class="item-review" :class="review.type.toLowerCase()">

        <div class="review-content">
            <h3 v-if="review.title">
                {{ review.title }}
            </h3>
            <p class="review-description" :class="{opened}" v-html="review.description"></p>
            <AppButton variant="slim" pallete="gray" class="btn-show-all" :class="{'hide-btn': opened}" @click.prevent="opened = true">
                Показать всю рецензию
            </AppButton>
        </div>

        <div class="review-details">
            <p class="review-date">
                {{ foramtedDate }}
            </p>
            <div class="review-btns">
                <AppButton variant="slim" pallete="white" class="btn-usefull">
                    <i class="fas fa-thumbs-up"></i>
                    <span>
                        Полезно
                    </span>
                    <span class="fw-200">
                        {{ review.positiveRating }}
                    </span>
                </AppButton>
                <AppButton variant="slim" pallete="white" class="btn-usefull-not">
                    <i class="fas fa-thumbs-down"></i>
                    <span>
                        Нет
                    </span>
                    <span class="fw-200">
                        {{ review.negativeRating }}
                    </span>
                </AppButton>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        formatDate
    } from '@/utils/utilsFuncs.ts'
    import AppButton from '@/components/ui/AppButton.vue'

    export default {
        name: "ReviewItem",
        components: {
            AppButton
        },
        props: {
            review: {
                type: Object,
                required: true
            }
        },
        data(){
          return {
              opened: false
          }
        },

        computed: {
            foramtedDate(){
                return formatDate(this.review.date)
            },
            formatedDescription(){
                if(!this.opened){
                    return this.review.description
                }
                return this.review.description
            }
        }
    }
</script>

<style scoped lang="scss">
    .item-review{
        padding:20px 0;
        border: 1px solid rgba(255, 255, 255, .6);
        background: rgba(255, 255, 255, .2);
        font-size: calc(var(--size-sm) + 2px);
        margin: 0 0 var(--margin-block);
        @include sm{
            padding: var(--margin-block) 0;
        }
        &.negative{
            background: rgba(255, 25, 55, .3);
        }
        &.positive{
            background: rgba(25, 255, 55, .3);
        }
        .review-content{
            margin: 0 0 3rem;
            padding: 0 3rem;
            .review-description{
                margin: 0 0 4rem;
                white-space: pre-line;
                word-wrap: break-word;
                max-height: 100px;
                font-size: 14px;
                line-height: 20px;
                overflow: hidden;

                &.opened{
                    max-height: 100%;
                    overflow: unset;
                }
            }
            .btn-show-all{
                &.hide-btn{
                    display: none;
                }
            }
        }
        .review-details{

            justify-content: space-between;
            align-items: center;
            padding: 2rem 1.5rem 0;
            border-top: 1px solid var(--color-white);
            @include sm{
                display: flex;
                padding: 4rem 3rem 0;
            }
            .review-date{
                margin: 0 0 3rem;
                text-align: center;
                @include sm{
                    text-align: left;
                    margin: 0 2rem 0 0;
                }
            }
            .review-btns{
                display: flex;
                justify-content: center;
                align-items: center;

                .btn-usefull{
                    margin: 0 2rem 0 0;
                    i{
                        color: #1e7928;
                    }
                }
                .btn-usefull-not{

                    i{
                        color: #831d26;
                    }
                }

            }
        }
    }
</style>