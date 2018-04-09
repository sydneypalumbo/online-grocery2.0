import React from 'react'
import { Link } from 'react-router-dom';
import './product-card.scss'
import axios from 'axios';
var path = require('path')

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
        let addedToCart = "" + this.state.quantity
        console.log(this.props.sessionID)
        axios.put('/add', {
          sessionID: this.props.sessionID,
          addedToCart: addedToCart
        })
        .then(response => {
        	console.log(response)
        })
    }

    subtractQuantity() {

        const currentQuantity = this.state.quantity
        if (currentQuantity > 1) {
            this.setState({
                quantity: currentQuantity - 1
            })
        }
        axios.put('/subtract', {
          sessionID:this.state.value,
          addedToCart: ""+ this.state.name + ": "+this.state.quantity
        })
        .then(response => {
        	console.log(response)
        })
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
                <Link to={{ pathname: '/product', state: { product: this.props.product} }}>
                    <img className='product-card-image' src={this.props.product.imageSrc}/>
                    <div className='product-card-name'>{this.props.product.name}</div>
                </Link>
                <div className='product-card-size'>{this.props.product.size}</div>
                <div className='product-card-price bold'>${parseFloat(Math.round(this.props.product.price * 100) / 100).toFixed(2)}</div>
                <div className='product-card-buttons'>
                    <img onClick={this.handleAddToCart} className='product-card-add-to-cart'
                         src={`${path.join(__dirname, 'images/trolley-clipart.png')}`}/>
                    <div className='product-card-quantity'>
                        <div className='product-card-quantity-change' onClick={this.subtractQuantity}>-</div>
                        {this.state.quantity}
                        <div className='product-card-quantity-change' onClick={this.addQuantity}>+</div>
                    </div>
                    <div className="tooltip--triangle" data-tooltip="The Guiding Stars® program evaluates the nutrient content of foods using nutrition data gleaned from the Nutrition Facts table and the ingredient list on product packaging. Click to learn more!">
                        <a href="https://guidingstars.com/what-is-guiding-stars/">
                            <img className='product-card-guiding-stars'
                                 src={`${path.join(__dirname, 'images/' + this.props.product.stars + 'howestars.png')}`}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
