<template>
    <div class="slider-multi">
        <div class="slider-inputs">
            <div class="slider-input">
                <label v-if="minTitle" for="slider-input-min">
                    {{ minTitle }}
                </label>
                <Input id="slider-input-min" type="number" :value="modelValue.min" @change="updateMin" />
            </div>
            <div class="slider-input">
                <label v-if="maxTitle" for="slider-input-max">
                    {{ maxTitle }}
                </label>
                <Input  id="slider-input-max" type="number" :value="modelValue.max" @change="updateMax" />
            </div>

        </div>


    <MultiRangeSlider
            class="slider-el"
            baseClassName="multi-range-slider-bar-only"
            :minValue="modelValue.min"
            :maxValue="modelValue.max"
            :max="max"
            :min="min"
            :step="step"
            :rangeMargin="0"
            @input="$emit('update:modelValue', $event)"
    />
    </div>
</template>

<script>
    import MultiRangeSlider from "multi-range-slider-vue";
    import "multi-range-slider-vue/MultiRangeSliderBarOnly.css";

    import { Input} from '@/components/ui/form'
    export default {
        name: "Slider",
        components: {
            MultiRangeSlider,
            Input
        },
        props: {
            modelValue: {},
            minTitle: {
                type: String,
                default: 'От'
            },
            maxTitle: {
                type: String,
                default: 'До'
            },
            min: Number,
            max: Number,
            step: {
                type: Number,
                default: 1
            }
        },
        emits: ['update:modelValue'],
       methods: {
            updateMax(e){
                let val = +e.target.value;
                if(val < this.modelValue.min){
                    val = this.modelValue.min + 1;
                }
                else if(val > this.max){
                    val = this.max;
                }
                const res = {
                    maxValue: val,
                    minValue: this.modelValue.min
                };
                this.$emit('update:modelValue', res)
            },
           updateMin(e){
               let val = +e.target.value;
               if(val > this.modelValue.max){
                   val = this.modelValue.max - 1;
               }
               else if(val < this.min){
                   val = this.min;
               }
               const res = {
                   maxValue: this.modelValue.max,
                   minValue: val
               };
               this.$emit('update:modelValue', res)
           }
       }
    }
</script>

<style scoped lang="scss">
    .slider-multi{
        .slider-inputs{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 0 2rem;
            .slider-input{
                width: 50%;
                margin: 0 4rem 0 0;
                &:last-of-type{
                    margin: 0;
                }
                label{
                    display: block;
                    margin: 0 0 1rem;
                    font-size: var(--size-sm);
                }
            }

        }
        .slider-el{
            padding: 10px 20px;
        }
        :deep(){

            .thumb{
                &:before{
                    box-shadow: none;

                }
            }
            .bar-left, .bar-right{
                box-shadow: none;
                background: var(--color-white);
            }
            .bar-inner{
                background: var(--color-blue);
                box-shadow: none;
            }
        }
    }
</style>