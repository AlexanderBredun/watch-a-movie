<template>
    <div class="movie-item-details">
        <h2>
            {{ title }}
        </h2>
        <div class="movie-item-detail-item" v-for="(item, i) in items" :key="i">
            <p class="title">

                {{ item.title }}
            </p>
            <p class="text" v-if="notEmpty(item.value) && item.modificators">
                <span :class="item.modificators" v-html="dataOrBlank(item.value)"></span>
            </p>
            <p class="text" v-else v-html="dataOrBlank(item.value)"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemDetails",
        props: {
          title: {
              type: String,
              required: true
          },
          items: {
               type: Object,
               required: true
           }
        },
        methods: {
            dataOrBlank(d){

                if(!this.notEmpty(d)){

                    return '—'
                }
                return d;
            },
            notEmpty(val){

                if(Array.isArray(val) && val.length){

                    return true;
                }
                else if(typeof val === 'object'
                    && !Array.isArray(val)
                    && val !== null
                    && !(Object.keys(val).length === 0)){

                    return true
                }
                else if(val){
                    return true
                }
                return false;

            }
        },
    }
</script>

<style scoped lang="scss">
    .movie-item-details{
        .movie-item-detail-item{
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin: 0 0 1.5rem;
            --size-sm: 14px;
            @include sm{
                --size-sm: 16px;
            }
            @include md{
                --size-sm: 1.5rem;
            }
            p{
                margin: 0 3rem 0 0;
                font-size: var(--size-sm);
            }
            .text{
                width: 50%;
                @include md{
                    width: 67%;
                }
            }
            .title{
                font-weight: 200;
                opacity: .8;
                width: 35%;
                min-width: 120px;
                @include sm{
                    min-width: auto;
                }
                @include md{
                    width: 17rem;
                }
            }
            .bordered{
                border: 1px solid #fff;
                padding: 3px 6px;

                text-align: center;
                border-radius: 6px;
            }
        }
    }
</style>