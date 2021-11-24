const tastingReducer = (state = [] ,action) => {
    switch (action.type) {
        case 'CREATE_TASTING':
            return [...state, action.payload];
        case 'EDIT_TASTING':
            return state.map((item) => Object.assign({},item,{editable: true}))
            //     if (action.payload === item.id) {
            //
            //         return {
            //             ...item,
            //             editable: true
            //         }
            //     }
            //     return item;
            // })
        case 'DELETE_TASTING':
            return state.filter((tasting) => {
                return tasting.id !== action.payload.id
            })
        default:
            return state;
    }
}

export default tastingReducer;