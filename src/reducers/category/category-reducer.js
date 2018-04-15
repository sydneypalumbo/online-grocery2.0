import { categoryActionTypes } from './category-actions'
import axios from 'axios'

var products = []
axios.get('/category', {params: {category: 1}})
    .then(res => {
        products = res.data
    })
    .catch(err => {
        console.log(err)
    })

const initialCategoryState = { category: 1, products: products}

export default function categoryReducer(state = initialCategoryState, action) {
    switch (action.type) {

        case(categoryActionTypes.SET_CATEGORY):
            return Object.assign({}, state, {
                selected: action.category
            })

        case(categoryActionTypes.SET_PRODUCTS):
            return Object.assign({}, state, {
                products: action.products
            })

        default:
            return state
    }
}