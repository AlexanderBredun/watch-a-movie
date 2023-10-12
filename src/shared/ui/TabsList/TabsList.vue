<template>
    <Tabs class="tabs-wrapper" :options="{ useUrlFragment: false }">
        <slot name="default" :Tab="Tab"></slot>
    </Tabs>
</template>

<script setup lang="ts">
// @ts-ignore
import { Tabs, Tab } from 'vue3-tabs-component';

defineSlots<{
    default(props: { Tab: Tab }): any
}>();

</script>

<style scoped lang="scss">
.tabs-wrapper {
    margin-bottom: var(--margin-block);

    :deep(.tabs-component-tabs) {
        overflow: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 2px solid var(--color-black-80);

        a {
            text-decoration: none;
        }

        .tabs-component-tab {

            padding: 1rem 1.5rem;
            font-size: var(--size-regular);

            &.is-active {
                border-bottom: 2px solid var(--color-blue);
            }

        }
    }

    :deep(.tabs-component-panels) {
        margin-top: 4rem;

    }
}
</style>