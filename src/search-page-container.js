import React from 'react'
import SearchPage from './search-page'
import { connect } from 'react-redux'
import { categoryActionCreators } from './reducers/category/category-actions';

const mapStateToProps = function(state){
    return {
        sessionID: state.user.sessionID,
        products: state.category.products
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleSetProducts: (products) => {
            dispatch(categoryActionCreators.setProducts(products))
        }
    }
}


class SearchPageContainer extends React.Component {
    render() {
        return (
            <SearchPage {...this.props} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageContainer)
