export const createTasting = (tasting) => {
    return {
        type: 'CREATE_TASTING',
        payload: tasting
    }
}

export const deleteTasting = (id) => {
    return {
        type: 'DELETE_TASTING',
        payload: {
            id: id
        }
    }
}



//
// export const addWine = (wine) => {
//     return {
//         type: 'ADD_WINE',
//         payload: wine
//     }
// }
//
// export const deleteWine = (wine) => {
//     return {
//         type: 'DELETE_WINE',
//         payload: wine
//     }
// }
//
// export const updateWine = (wine) => {
//     return {
//         type: 'UPDATE_WINE',
//         payload: wine
//     }
// }
//
// export const addResult = (result) => {
//     return {
//         type: 'ADD_RESULT',
//         payload: result
//     }
// }
// export const deleteResult = (result) => {
//     return {
//         type: 'DELETE_RESULT',
//         payload: result
//     }
// }
// export const updateResult = (result) => {
//     return {
//         type: 'UPDATE_RESULT',
//         payload: result
//     }
// }





