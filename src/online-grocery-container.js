import React from 'react'
import OnlineGrocery from './online-grocery'
import { connect } from 'react-redux'
import { categoryActionCreators } from './reducers/category/category-actions';

const mapStateToProps = function(state){
    return {
        selected: state.category.selected
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleSetCategory: (category) => {
            dispatch(categoryActionCreators.setCategory(category))
        },
        handleSetProducts: (products) => {
            dispatch(categoryActionCreators.setProducts(products))
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

