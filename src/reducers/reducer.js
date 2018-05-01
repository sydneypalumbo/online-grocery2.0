import { combineReducers } from 'redux'
import cartReducer from './cart/cart-reducer'
import categoryReducer from './category/category-reducer'
import userReducer from './user/user-reducer'
import paginationReducer from './pagination/pagination-reducer'
const reducer = combineReducers({
    cart: cartReducer,
    category: categoryReducer,
    user: userReducer,
    page: paginationReducer
})

export default reducer
