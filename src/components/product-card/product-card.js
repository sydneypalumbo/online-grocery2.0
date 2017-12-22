import React from 'react'
import { Link } from 'react-router-dom';
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
                <Link to='/product'>
                    <img className='product-card-image' src={this.props.src}/>
                    <div className='product-card-name-small'>{this.props.name}</div>
                </Link>
                <div className='product-card-size'>{this.props.size}</div>
                <div className='product-card-buttons'>
                    <div className='product-card-price'>${this.props.price}</div>
                    <img onClick={this.handleAddToCart} className='product-card-add-to-cart' src={'../../../src/images/trolley-clipart.png'}/>
                </div>
            </div>
        )
    }
}
