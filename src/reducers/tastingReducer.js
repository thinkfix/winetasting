const tastingReducer = (state = [] ,action) => {
    switch (action.type) {
        case 'CREATE_TASTING':
            return [...state, action.payload];
        case 'EDIT_TASTING':
            console.log('Line: 6', state);
            console.log('Line: 7', action.payloads);
            return state.map(item => {
                if (action.payload.id === item.id) {
                    return action.payload
                }
                return item;
            })
        case 'DELETE_TASTING':
            return state.filter((tasting) => {
                return tasting.id !== action.payload.id
            })
        default:
            return state;
    }
}

export default tastingReducer;