export const createTasting = (data) => {
    return {
        type: 'CREATE_TASTING',
        payload: {
            data: data
        }
    }
}

export const editTasting = (data, currentEditIndex) => {
    return {
        type: 'EDIT_TASTING',
        payload: {
            data: data,
            index: currentEditIndex
        }
    }
}

export const deleteTasting = (index) => {
    return {
        type: 'DELETE_TASTING',
        payload: {
            index: index
        }
    }
}




