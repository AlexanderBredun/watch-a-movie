const mutations = {
    SET_ITEMS (state, items) {
        state.items.push(...items)
    },
    SET_SLICED_ITEMS (state, items) {
        state.slicedItems.push(...items)
    },
    SET_PAGE (state, page) {
        state.page = page
    },
    SET_TOTAL_ITEMS (state, pages) {
        state.totalItems = pages
    },
    SET_LOADING (state, value) {
        state.loading = value
    },
    SET_ERROR (state, value) {
        state.error = value
    },
};

export default mutations;