<template>
    <AppButton @click.prevent="goBack" :class="{'back-btn-mini': mini}">
        <i class="fas fa-arrow-left"></i> <span v-if="!mini">Назад</span>
    </AppButton>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppButton from '@/components/ui/AppButton.vue'

    export default defineComponent({
        name: "BackButton",
        components: {
            AppButton
        },
        props: {
            mini: Boolean
        },
        computed: {
            hasHistory () { return window.history.length > 2 },

        },
        methods: {
            goBack () {
                console.log(this.hasHistory);
                this.hasHistory ? this.$router.go(-1) : this.$router.push('/');
            },
        }
    })
</script>

<style scoped lang="scss">

</style>