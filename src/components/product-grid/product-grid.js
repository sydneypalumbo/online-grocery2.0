import React from 'react'
import './product-grid.scss'
import ProductCard from '../product-card/product-card'

const products = [{
        name: "Kraft Natural Cheese, Finely Shredded, Sharp Cheddar",
        src: "http://www.publix.com/images/products/70000/071496-600x600-A.jpg",
        price: 10,
        size: "8 oz (226 g)"
    },
    {
        name: "Pillsbury Dinner Rolls, Crescent, Original",
        src: "http://www.publix.com/images/products/65000/067305-600x600-A.jpg",
        price: 5,
        size: "8 rolls [8 oz (226 g)]"
    },
    {
        name: "Horizon Organic String Cheese, Organic, Mozzarella",
        src: "http://www.publix.com/images/products/795000/798344-600x600-A.jpg",
        price: 10,
        size: "6 sticks [6 oz (170 g)]"
    },
    {
        name: "food 2",
        src: "http://www.publix.com/images/products/20000/023844-600x600-A.jpg",
        price: 5,
        size: "5 oz"
    },
    {
        name: "Jell O Gelatin Snacks, Original, Orange",
        src: "http://www.publix.com/images/products/190000/193109-600x600-A.jpg",
        price: 10,
        size: "13.5 oz (384 g)"
    },
    {
        name: "Silk Almondmilk, Vanilla, Unsweetened",
        src: "http://www.publix.com/images/products/820000/823307-600x600-A.jpg",
        price: 5,
        size: "0.5 gl (1.89 lt)"
    },
    {
        name: "food 1",
        src: "http://www.publix.com/images/products/5000/005378-600x600-A.jpg",
        price: 10,
        size: "5 oz"
    },
    {
        name: "food 2",
        src: "http://www.publix.com/images/products/20000/023844-600x600-A.jpg",
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