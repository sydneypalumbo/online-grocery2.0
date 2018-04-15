export const categoryActionTypes = {
    SET_CATEGORY: `SET_CATEGORY`,
    SET_PRODUCTS: `SET_PRODUCTS`
}

function setCategory(category) {
    return {
        type: categoryActionTypes.SET_CATEGORY,
        category: category
    }
}

function setProducts(products) {
    return {
        type: categoryActionTypes.SET_PRODUCTS,
        products: products
    }
}

export const categoryActionCreators = {
    setCategory,
    setProducts
}
