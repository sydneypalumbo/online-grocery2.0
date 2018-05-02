import React from 'react'
import './product-grid.scss'
import ProductCardContainer from '../product-card/product-card-container'
import PaginationContainer from '../pagination/pagination-container'

export default class ProductGrid extends React.Component {

    render() {
        const pageType = this.props.pageType || 'browse-page'
        let productCards = this.props.products.map((product,i) => {
            return (
                <div key={i} className='product-grid-item'>
                    <ProductCardContainer product={product}/>
                </div>
            )
        })
        return (
            <div className='product-grid'>
                <div>{productCards}</div>
                {pageType != 'search-page' &&
                    <PaginationContainer {...this.props}/>
                }
            </div>
        )
    }

}
