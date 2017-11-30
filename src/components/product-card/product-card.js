import React from 'react'
import './product-card.scss'

export default class ProductCard extends React.Component {

    constructor(props) {
        super(props)

        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

    handleAddToCart() {
        this.props.handleAddToCart(this.props, 1)
    }

    render() {
        return (
            <div className='product-card'>
                <img className='product-card-image' src={this.props.src}/>
                <a href="../productpage.html" className='product-card-name'>{this.props.name}</a>
                <div className='product-card-size'>{this.props.size}</div>
                <div className='product-card-buttons'>
                    <div className='product-card-price'>${this.props.price}</div>
                    <img onClick={this.handleAddToCart} className='product-card-add-to-cart' src={'../../../src/images/trolley-clipart.png'}/>
                </div>
            </div>
        )
    }
}