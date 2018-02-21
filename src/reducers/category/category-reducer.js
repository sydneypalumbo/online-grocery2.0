import { categoryActionTypes } from './category-actions'

const initialCategoryState = { category: 1 }

export default function categoryReducer(state = initialCategoryState, action) {
    switch (action.type) {

        case(categoryActionTypes.SET_CATEGORY):
            return Object.assign({}, state, {
                selected: action.category
            })

        default:
            return state
    }
}