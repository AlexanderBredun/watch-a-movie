<template>
    <div>
        <ErrorHelper
                v-if="err"
        />
        <slot v-else></slot>
    </div>
</template>

<script>
    import ErrorHelper from '@/components/screens/ErrorHelper.vue'

    export default {
        name: "ErrorBoundary",
        props: {
            stopPropagation: Boolean
        },
        components: {
            ErrorHelper
        },
        data() {
            return {
                err: false,
                vm: null,
                info: null
            };
        },
        errorCaptured(err, vm, info) {
            console.log(err);
            this.err = Boolean(err);
            this.vm = vm;
            this.info = info;
            return this.stopPropagation;
        }
    };
</script>

<style lang="scss" scoped>
</style>