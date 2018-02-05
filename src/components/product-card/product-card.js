import React from 'react'
import { Link } from 'react-router-dom';
import './product-card.scss'

export default class ProductCard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            quantity: 1
        }

        this.handleAddToCart = this.handleAddToCart.bind(this)
        this.subtractQuantity = this.subtractQuantity.bind(this)
        this.addQuantity = this.addQuantity.bind(this)
    }

    handleAddToCart() {
        this.props.handleAddToCart(this.props, this.state.quantity)
    }

    subtractQuantity() {
        const currentQuantity = this.state.quantity
        if (currentQuantity > 1) {
            this.setState({
                quantity: currentQuantity - 1
            })
        }
    }

    addQuantity() {
        const currentQuantity = this.state.quantity
        this.setState({
            quantity: currentQuantity + 1
        })
    }

    render() {

        return (
            <div className='product-card'>
                <Link to='/product'>
                    <img className='product-card-image' src={this.props.src}/>
                    <div className='product-card-name'>{this.props.name}</div>
                </Link>
                <div className='product-card-size'>{this.props.size}</div>
                <div className='product-card-price bold'>${parseFloat(Math.round(this.props.price * 100) / 100).toFixed(2)}</div>
                <div className='product-card-buttons'>
                    <img onClick={this.handleAddToCart} className='product-card-add-to-cart'
                         src={'../../../src/images/trolley-clipart.png'}/>
                    <div className='product-card-quantity'>
                        <div className='product-card-quantity-change' onClick={this.subtractQuantity}>-</div>
                        {this.state.quantity}
                        <div className='product-card-quantity-change' onClick={this.addQuantity}>+</div>
                    </div>
                    <div className="tooltip--triangle" data-tooltip="The Guiding Stars® program evaluates the nutrient content of foods using nutrition data gleaned from the Nutrition Facts table and the ingredient list on product packaging. Click to learn more!">
                        <a href="https://guidingstars.com/what-is-guiding-stars/">
                            <img className='product-card-guiding-stars'
                                 src={this.props.starSRC}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
