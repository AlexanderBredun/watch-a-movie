<template>
    <PaginationArrows :page="page" :totalPages="totalPages" @changePage="changePage"/>
</template>

<script lang="ts">
    import { mapState } from 'vuex'
    import { defineComponent } from 'vue';
    import PaginationArrows from '@/components/PaginationArrows.vue'

    export default defineComponent({
        name: "CategoryListPagination",
        components: {
            PaginationArrows
        },
        computed: {
            ...mapState({
                page: (state: any)=> state.filterData.page,
                totalPages: (state: any)=> state.filterData.totalPages,
            })
        },
        methods: {
            changePage(val){
                this.$store.commit('filterData/SET_PAGE', val);

            }
        }
    })
</script>

<style scoped>

</style>