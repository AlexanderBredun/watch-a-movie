<template>
    <Tabs class="tabs-wrapper" :options="{ useUrlFragment: false }">
      <slot></slot>
    </Tabs>
</template>

<script>
    import {Tabs} from 'vue3-tabs-component';

    export default {
        name: "TabsItem",
        components: {
            Tabs
        }
    }
</script>

<style scoped lang="scss">
    .tabs-wrapper{
        margin-bottom: var(--margin-block);

        :deep(.tabs-component-tabs){
            overflow: auto;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-bottom: 2px solid var(--color-black-80);
            a{
                text-decoration: none;
            }

            .tabs-component-tab{

                padding: 1rem 1.5rem;
                font-size: var(--size-regular);

                &.is-active{
                    border-bottom: 2px solid var(--color-blue);
                }

            }
        }
        :deep(.tabs-component-panels){
            margin-top: 4rem;

        }
    }
</style>