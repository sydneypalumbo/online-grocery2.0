import React from 'react'
import './product-grid.scss'
import ProductCardContainer from '../product-card/product-card-container'

const products = [
    {
        name: "Town House Flatbread Crisps Crackers, Italian Herb",
        src: "http://www.publix.com/images/products/310000/313612-600x600-A.jpg",
        price: 5,
        size: "5 oz",
        stars: 1
    },
    {
        name: "Jell O Gelatin Snacks, Original, Orange",
        src: "http://www.publix.com/images/products/190000/193109-600x600-A.jpg",
        price: 10,
        size: "13.5 oz (384 g)",
        stars: 1
    },
    {
        name: "Silk Almondmilk, Vanilla, Unsweetened",
        src: "http://www.publix.com/images/products/820000/823307-600x600-A.jpg",
        price: 5,
        size: "0.5 gl (1.89 lt)",
        stars: 3
    },
    {
        name: "Goldfish Graham Snacks, Baked, Cheddar, Lunch Packs",
        src: "http://www.publix.com/images/products/355000/355931-600x600-A.jpg",
        price: 10,
        size: "5 oz",
        stars: 1
    },
    {
        name: "Cheez It Baked Snack Crackers, Extra Toasty",
        src: "http://www.publix.com/images/products/210000/211848-600x600-A.jpg",
        price: 5,
        size: "5 oz",
        stars: 1
    },
    {
        name: "Lance Toast Chee Cracker Sandwiches, Peanut Butter, On-the-Go Packs",
        src: "http://www.publix.com/images/products/300000/304498-600x600-A.jpg",
        price: 5,
        size: "5 oz",
        stars: 1
    },
    {
        name: "Club Crackers, Multi-Grain",
        src: "http://www.publix.com/images/products/310000/311575-600x600-A.jpg",
        price: 5,
        size: "5 oz",
        stars: 1
    },
    {
        name: "Goldfish Flavor Blasted Baked Snack Crackers, Xtra Cheddar",
        src: "http://www.publix.com/images/products/310000/310180-600x600-A.jpg",
        price: 5,
        size: "5 oz",
        stars: 1
    },
    {
        name: "Ritz Toasted Chips, Sour Cream and Onion",
        src: "http://www.publix.com/images/products/310000/310138-600x600-A.jpg",
        price: 5,
        size: "5 oz",
        stars: 1
    },
    {
        name: "Ritz Toasted Chips, Original",
        src: "http://www.publix.com/images/products/310000/310139-600x600-A.jpg",
        price: 5,
        size: "5 oz",
        stars: 3
    },
    {
        name: "Publix Saltines",
        src: "http://www.publix.com/images/products/10000/011001-600x600-A.jpg",
        price: 3.87,
        size: "5 oz",
        stars: 1
    },
    {
        name: "Wheat Thins Snacks, Original",
        src: "http://www.publix.com/images/products/300000/300568-600x600-A.jpg",
        price: 5,
        size: "5 oz",
        stars: 1
    },
    {
        name: "Apple",
        src: "http://www.publix.com/images/products/20000/023844-600x600-A.jpg",
        price: 5,
        size: "5 oz",
        stars: 3
    },
    {
        name: "Kraft Natural Cheese, Finely Shredded, Sharp Cheddar",
        src: "http://www.publix.com/images/products/70000/071496-600x600-A.jpg",
        price: 10,
        size: "8 oz (226 g)",
        stars: 1
    },
    {
        name: "Pillsbury Dinner Rolls, Crescent, Original",
        src: "http://www.publix.com/images/products/65000/067305-600x600-A.jpg",
        price: 5,
        size: "8 rolls [8 oz (226 g)]",
        stars: 0
    },
    {
        name: "Horizon Organic String Cheese, Organic, Mozzarella",
        src: "http://www.publix.com/images/products/795000/798344-600x600-A.jpg",
        price: 10,
        size: "6 sticks [6 oz (170 g)]",
        stars: 1
    }]

export default class ProductGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch(`/api/products`)
            .then((response) => response.json())
            .then((response) =>
            {
                this.setState({
                products: response.products
            })})
    }

    render() {
        let productCards = this.state.products.map((product,i) => {
            return (
                <div key={i} className='product-grid-item'>
                    <ProductCardContainer {...product}/>
                </div>
            )
        })
        return (
            <div>{productCards}</div>
        )
    }

}
