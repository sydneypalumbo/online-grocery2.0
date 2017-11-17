import React from 'react'
import './product-grid.scss'
import ProductCard from '../product-card/product-card'

const products = [{
        name: "food 1",
        src: "http://www.publix.com/images/products/5000/005378-600x600-A.jpg",
        price: 10,
        size: "5 oz"
    },
    {
        name: "food 2",
        src: "http://www.publix.com/images/products/5000/005378-600x600-A.jpg",
        price: 5,
        size: "5 oz"
    },
    {
        name: "food 1",
        src: "http://www.publix.com/images/products/5000/005378-600x600-A.jpg",
        price: 10,
        size: "5 oz"
    },
    {
        name: "food 2",
        src: "http://www.publix.com/images/products/5000/005378-600x600-A.jpg",
        price: 5,
        size: "5 oz"
    }]

export default class ProductGrid extends React.Component {

    render() {
        let productCards = products.map(product => {
            return (
                <div className='product-grid-item'>
                    <ProductCard {...product}/>
                </div>
            )
        })
        return (
            <div>{productCards}</div>
        )
    }

}