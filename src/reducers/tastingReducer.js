export default (state = [] ,action) => {
    switch (action.type) {
        case 'CREATE_TASTING':
            return [...state, action.payload];
        case 'DELETE_TASTING':
            return state.filter((tasting) => {
                return tasting.id !== action.payload.id
            })
        default:
            return state;
    }
}