import React from 'react'
import Pagination from './pagination'
import { connect } from 'react-redux'
import { paginationActionCreators } from '../../reducers/pagination/pagination-actions';
import { categoryActionCreators } from '../../reducers/category/category-actions';

const mapStateToProps = function(state){
    return {
        page: state.page,
        category: state.category,
        subcategory: state.subcategory
    }
}
const mapDispatchToProps = function (dispatch) {
    return {
        handleNextPage: (page) => {
            dispatch(paginationActionCreators.nextPage(page))
        },
        handlePreviousPage: (page) => {
            dispatch(paginationActionCreators.previousPage(page))
        },
        handleSetProducts: (products) => {
            dispatch(categoryActionCreators.setProducts(products))
        }
    }
}

class PaginationContainer extends React.Component {
    render() {
        return (
            <Pagination {...this.props} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer)
