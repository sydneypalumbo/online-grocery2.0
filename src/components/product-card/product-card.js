import React from 'react'
import { Link } from 'react-router-dom';
import './product-card.scss'

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
      let product= this.props
      let nutritionFacts = {
            calories: this.props.calories,
            servingSize: this.props.servingSize,
            servingCount: this.props.servingCount,
            fatCalories: this.props.caloriesFromFat,
            totalFat: this.props.totalFat,
            satFat: this.props.saturatedFat,
            transFat: this.props.transFat,
            polyFat: this.props.polyFat,
            monoFat: this.props.monoFat,
            cholesterol: this.props.cholesterol,
            sodium: this.props.sodium,
            potassium: this.props.potassium,
            carbs: this.props.carbs,
            fiber: this.props.fiber,
            sugar: this.props.sugar,
            protein: this.props.protein,
            vitamins: this.props.vitamins
      }
        return (
            <div className='product-card'>
                <Link to={{ pathname: '/product', state: {nutritionFacts: nutritionFacts, description:this.props.description, size: this.props.size, price:this.props.price, name:this.props.name, src:this.props.imageSrc}}}>
                    <img className='product-card-image' src={this.props.imageSrc}/>
                    <div className='product-card-name'>{this.props.name}</div>
                </Link>
                <div className='product-card-size'>{this.props.size}</div>
                <div className='product-card-price bold'>${parseFloat(Math.round(this.props.price * 100) / 100).toFixed(2)}</div>
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
                                 src={`${path.join(__dirname, 'images/' + this.props.stars + 'howestars.png')}`}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
