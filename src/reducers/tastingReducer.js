const tastingReducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_TASTING':
            return [...state, action.payload.data];
        case 'EDIT_TASTING':
            return state.map((item, index) => {
                if (action.payload.index === index) {
                    return action.payload.data
                }
                return item;
            })
        case 'DELETE_TASTING':
            return state.filter((tasting, index) => {
                return index !== action.payload.index
            })
        default:
            return state;
    }
}

export default tastingReducer;