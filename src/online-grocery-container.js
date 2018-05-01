import React from 'react'
import OnlineGrocery from './online-grocery'
import { connect } from 'react-redux'
import { categoryActionCreators } from './reducers/category/category-actions';
import { paginationActionCreators } from './reducers/pagination/pagination-actions';

const mapStateToProps = function(state){
    return {
        category: state.category.category,
        subcategory: state.category.subcategory,
        subcategoryName: state.category.subcategoryName,
        categories: state.category.categories,
        subcategories: state.category.subcategories
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleSetCategory: (category, subcategory, subcategoryName) => {
            dispatch(categoryActionCreators.setCategory(category, subcategory, subcategoryName))
        },
        handleSetProducts: (products) => {
            dispatch(categoryActionCreators.setProducts(products))
        },
        handleSetCategories: (categories) => {
            dispatch(categoryActionCreators.setCategories(categories))
        },
        handleSetSubcategories: (subcategories) => {
            dispatch(categoryActionCreators.setSubcategories(subcategories))
        },
        handleClearPage: () => {
          dispatch(paginationActionCreators.clearPage())
        }
    }
}

class OnlineGroceryContainer extends React.Component {
    render() {
        return (
            <OnlineGrocery {...this.props} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnlineGroceryContainer)
