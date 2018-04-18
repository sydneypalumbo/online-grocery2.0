import React from 'react'
import OnlineGrocery from './online-grocery'
import { connect } from 'react-redux'
import { categoryActionCreators } from './reducers/category/category-actions';

const mapStateToProps = function(state){
    return {
        selected: state.category.selected,
        categories: state.category.categories,
        subcategories: state.category.subcategories
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleSetCategory: (category) => {
            dispatch(categoryActionCreators.setCategory(category))
        },
        handleSetProducts: (products) => {
            dispatch(categoryActionCreators.setProducts(products))
        },
        handleSetCategories: (categories) => {
            dispatch(categoryActionCreators.setCategories(categories))
        },
        handleSetSubcategories: (subcategories) => {
            dispatch(categoryActionCreators.setSubcategories(subcategories))
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

