export const categoryActionTypes = {
    SET_CATEGORY: `SET_CATEGORY`
}

function setCategory(category) {
    return {
        type: categoryActionTypes.SET_CATEGORY,
        category: category
    }
}

export const categoryActionCreators = {
    setCategory
}
