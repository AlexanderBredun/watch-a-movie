<template>
    <input  class="input-default" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
</template>

<script>
    export default {
        name: "Input",
        props: {
            modelValue: {},
        },
        emits: ['update:modelValue'],

    }
</script>

<style scoped lang="scss">
    .input-default{
        background: var(--color-black-80);
        border: 1px solid var(--color-gray);
        padding: 1rem 2rem;
        height: 5rem;
        color: var(--color-white);
        border-radius: 1rem;
        width: 100%;
        &[type='number']{
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }
        }
    }

</style>