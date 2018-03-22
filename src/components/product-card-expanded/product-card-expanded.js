import React from 'react'
import './product-card-expanded.scss'
import NutritionLabel from '../nutrition-label/nutrition-label'

var path = require('path')

export default class ProductCardExpanded extends React.Component {

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
            <div className='product-card-expanded'>
                <img className='product-card-expanded-image' src={this.props.imageSrc}/>
                <div className='product-card-expanded-right-section'>
                    <div className='product-card-expanded-name'>{this.props.name}</div>
                    <div className='product-card-expanded-size'>{this.props.size}</div>

                    <div className='product-card-expanded-price bold'>${parseFloat(Math.round(this.props.price * 100) / 100).toFixed(2)}</div>
                    <div className='product-card-expanded-buttons'>
                        <img className='product-card-expanded-add-to-cart' onClick={this.handleAddToCart}
                             src={`${path.join(__dirname, 'images/trolley-clipart.png')}`}/>
                        <div className='product-card-expanded-quantity'>
                            <div className='product-card-expanded-quantity-change' onClick={this.subtractQuantity}>-</div>
                            {this.state.quantity}
                            <div className='product-card-expanded-quantity-change' onClick={this.addQuantity}>+</div>
                        </div>
                    </div>
                    <div className='product-card-expanded-description'>{this.props.description}</div>
                    {this.props.servingSize && <NutritionLabel nutritionFacts={{
                        servingSize: this.props.servingSize,
                        servings: this.props.servings,
                        caloriesFromFat: this.props.caloriesFromFat,
                        calories: this.props.calories,
                        totalFat: this.props.totalFat,
                        saturatedFat: this.props.saturatedFat,
                        transFat: this.props.transFat,
                        polyFat: this.props.polyFat,
                        cholesterol: this.props.cholesterol,
                        sodium: this.props.sodium,
                        potassium: this.props.potassium,
                        carbs: this.props.carbs,
                        fiber: this.props.fiber,
                        sugar: this.props.sugar,
                        protein: this.props.protein,
                        vitamins: this.props.vitamins,
                    }}/>}
                    <span className='product-card-expanded-ingredients bold'>INGREDIENTS: </span>
                    <span className='product-card-expanded-ingredients'>{this.props.ingredients}</span>
                </div>
            </div>
        )
    }
}