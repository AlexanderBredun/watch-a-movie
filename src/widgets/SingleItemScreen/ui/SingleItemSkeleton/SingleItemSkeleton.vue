<template>
    <SingleItemBody >
        <template #image>
            <SkeletItem image height="100%" />
        </template>
        <template #aside-name>
            <SkeletItem height="4rem" width="80%" />
            <SkeletItem height="2rem" width="40%" />
           
        </template>
        <template #aside-details>
            <SkeletItem width="60%" />
            <SkeletItem width="60%" />
            <SkeletItem width="60%" />
            <SkeletItem width="60%" />
            <SkeletItem width="60%" />
            <SkeletItem width="60%" />
            <SkeletItem width="60%" />
            <SkeletItem width="60%" />
            <SkeletItem width="60%" />
            <SkeletItem width="60%" />
            <SkeletItem width="60%" />
            <SkeletItem width="60%" />
        </template>
        <template #description>
            <SkeletItem height="200px" />
        </template>
        <template #bottom-block>
            <SkeletItem height="200px" />
            <SkeletItem height="200px" />
        </template>
    </SingleItemBody>
</template>

<script setup lang="ts">
import SkeletItem from '@/shared/ui/SkeletItem/SkeletItem.vue';
import SingleItemBody from '../SingleItemBody/SingleItemBody.vue';


</script>

<style scoped lang="scss">

</style>