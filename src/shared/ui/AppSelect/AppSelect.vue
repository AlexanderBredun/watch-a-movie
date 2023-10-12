<template>
    <div class="default-select">
        <select :disabled="!options" @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
            <option value="default" :selected="!modelValue" disabled="true">{{ title }}</option>
            <option v-for="el in options" :selected="modelValue == el.id" :key="el.id" :value="el.id">{{ el.text }}</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import type { SelectOption } from '../../lib/types';


interface AppSelectProps {
    modelValue: string
    options: Array<SelectOption>
    title?: string
}

withDefaults(defineProps<AppSelectProps>(), {
    title: 'Выберите вариант'
});

defineEmits<{
    (event: 'update:modelValue', val: string): void
}>();

</script>

<style scoped lang="scss">
select {

    appearance: none;
    background-color: transparent;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    color: var(--color-white);
    z-index: 1;


    &::-ms-expand {
        display: none;
    }


    outline: none;
}

.default-select {
    border: 1px solid var(--color-gray);
    border-radius: 0.25em;


    font-size: var(--size-sm);
    cursor: pointer;
    line-height: 1.1;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 2rem;
        transform: translate3d(0, -50%, 0);

        width: 1rem;
        height: .5rem;
        background-color: var(--color-gray);
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }

    option {
        color: var(--color-white);
        white-space: normal;
        // Only affects Chrome
        outline-color: var(--color-gray);
        background: var(--color-black);
    }
}
</style>