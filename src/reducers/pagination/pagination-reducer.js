import { paginationActionTypes } from './pagination-actions'

const initialPaginationState = {page:1}

export default function paginationReducer(state = initialPaginationState, action) {
    switch (action.type) {
        case(paginationActionTypes.NEXT_PAGE):
            return Object.assign({}, state, {
                page: action.page
            })

        case(paginationActionTypes.PREVIOUS_PAGE):
            return Object.assign({}, state, {
                page: action.page
            })
        case(paginationActionTypes.CLEAR_PAGE):
            return Object.assign({}, state, {
                page: action.page
            })

        default:
            return state
    }
}
