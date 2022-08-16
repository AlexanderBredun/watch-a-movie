const state = ()=> {
    return {
        items: [],
        loading: true,
        error: false,
        slicedItems: [],
        page: 1,
        totalItems: null
    }

}

export default state;