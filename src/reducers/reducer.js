import { combineReducers } from 'redux'
import cartReducer from './cart/cart-reducer'
import categoryReducer from './category/category-reducer'

const reducer = combineReducers({
    cart: cartReducer,
    category: categoryReducer
})

export default reducer