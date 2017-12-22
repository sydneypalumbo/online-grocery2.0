import { cartActionTypes } from './cart-actions'

const initialCartState = {count: 0, items:[], price: 0}

export default function cartReducer(state = initialCartState, action) {
    switch(action.type) {
        case(cartActionTypes.ADD_TO_CART):
            console.log('got here')
            return Object.assign({},state, {
                count: state.count + 1,
                items: [
                    ...state.items,
                    action.product
                ],
                price: state.price + action.product.price
            })
        case(cartActionTypes.REMOVE_FROM_CART):
            const productIndex = state.items.indexOf(action.product)
            const newitems = Object.assign([], state.items)
            if (productIndex > -1) {
                newitems.splice(productIndex, 1)
            }
            return Object.assign({}, state, {
                count: state.count - 1,
                items: newitems,
                price: state.price - action.product.price
            })
        default:
            return state
    }
}
