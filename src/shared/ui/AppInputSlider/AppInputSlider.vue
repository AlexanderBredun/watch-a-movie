<template>
    <div class="slider-multi">
        <div class="slider-inputs">
            <div class="slider-input">
                <label v-if="minTitle" for="slider-input-min">
                    {{ minTitle }}
                </label>
                <AppInput id="slider-input-min" type="number" :min="modelValue.min" :max="modelValue.max - 1" :value="modelValue.min" @change="updateMin" />
            </div>
            <div class="slider-input">
                <label v-if="maxTitle" for="slider-input-max">
                    {{ maxTitle }}
                </label>
                <AppInput id="slider-input-max" type="number" :min="modelValue.min + 1" :max="modelValue.max" :value="modelValue.max" @change="updateMax" />
            </div>
        </div>

        <MultiRangeSlider class="slider-el" baseClassName="multi-range-slider-bar-only" :minValue="modelValue.min"
                          :maxValue="modelValue.max" :max="max" :min="min" :step="step" :rangeMargin="0"
                          @input="upadateSlider" />
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import MultiRangeSlider from 'multi-range-slider-vue';
import 'multi-range-slider-vue/MultiRangeSliderBarOnly.css';
import type { InputSliderReturnValue, MinMaxFilter } from '../../lib/types';
import AppInput from '../AppInput/AppInput.vue';

interface AppInputSliderProps {
    modelValue: {
        min: number,
        max: number,
    };
    minTitle?: string;
    maxTitle?: string;
    min: number;
    max: number;
    step?: number;

}

const props = withDefaults(defineProps<AppInputSliderProps>(), {
    minTitle: 'От',
    maxTitle: 'До',
    step: 1,
});
const emit = defineEmits<{
    (event: 'update:modelValue', val: MinMaxFilter): void
}>();

function updateMax(e: Event) {
    const target = e.target as HTMLInputElement;
    let val = +target.value;
   
    if (val < props.modelValue.min) {
        val = props.modelValue.min + 1;
    }
    else if (val > props.max) {
        val = props.max;
    }
    const res = {
        max: val,
        min: props.modelValue.min
    };
    emit('update:modelValue', res);
}

function updateMin(e: Event) {
    const target = e.target as HTMLInputElement;

    let val = +target.value;
    console.log(val, props.modelValue.max, props.modelValue.min);
    
    if (val > props.modelValue.max) {
        val = props.modelValue.max - 1;
    }
    else if (val < props.min) {
        val = props.min;
    }
    console.log(val);
    
    const res = {
        max: props.modelValue.max,
        min: val
    };
    emit('update:modelValue', res);
}

function upadateSlider(e: InputSliderReturnValue) {
    emit('update:modelValue', {
        max: e.maxValue,
        min: e.minValue,
    });
}

</script>

<style scoped lang="scss">
.slider-multi {
    .slider-inputs {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 2rem;

        .slider-input {
            width: 50%;
            margin: 0 4rem 0 0;

            &:last-of-type {
                margin: 0;
            }

            label {
                display: block;
                margin: 0 0 1rem;
                font-size: var(--size-sm);
            }
        }

    }

    .slider-el {
        padding: 10px 20px;
    }

    :deep() {

        .thumb {
            &:before {
                box-shadow: none;

            }
        }

        .bar-left,
        .bar-right {
            box-shadow: none;
            background: var(--color-white);
        }

        .bar-inner {
            background: var(--color-blue);
            box-shadow: none;
        }
    }
}
</style>