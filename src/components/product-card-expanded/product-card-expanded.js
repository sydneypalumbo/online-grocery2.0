import React from 'react'
import './product-card-expanded.scss'

export default class ProductCardExpanded extends React.Component {

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
                <img className='product-card-image-large' src={this.props.src}/>
                <div className='product-card-name'>{this.props.name}</div>
                <div className='product-card-description'>{this.props.description}</div>
                <div className='product-card-size'>{this.props.size}</div>
                <div className='product-card-buttons'>
                    <div className='product-card-price'>${this.props.price}</div>
                    <img className='product-card-add-to-cart' onClick={this.handleAddToCart} src={'../../../src/images/trolley-clipart.png'}/>
                </div>
            </div>
        )
    }
}