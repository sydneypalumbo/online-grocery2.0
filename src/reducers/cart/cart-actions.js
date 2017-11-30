export const cartActionTypes = {
    ADD_TO_CART: `ADD_TO_CART`,
    REMOVE_FROM_CART: `REMOVE_FROM_CART`
}

function addToCart(product, quantity = 1) {
    const newProduct = Object.assign({}, product, {
        quantity: quantity
    })
    return {
        type: cartActionTypes.ADD_TO_CART,
        product: newProduct
    }
}

function removeFromCart(product) {
    return {
        type: cartActionTypes.REMOVE_FROM_CART,
        product: product
    }
}

export const cartActionCreators = {
    addToCart,
    removeFromCart
}
