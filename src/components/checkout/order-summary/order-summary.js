import React from 'react'
import './order-summary.scss'
import axios from 'axios';
export default class OrderSummary extends React.Component{


    removeFromCart(product) {
        this.props.handleRemoveFromCart(product)

        axios.post('/user', {
            sessionID: this.props.sessionID,
            actionType: "delete",
            quantity: product.quantity,
            name: product.name,
            size: product.size,
            servingSize: product.servingSize,
            servings: product.servings,
            caloriesFromFat: product.caloriesFromFat,
            calories: product.calories,
            totalFat: product.total,
            saturatedFat: product.saturatedFat,
            transFat: product.transFat,
            polyFat: product.polyFat,
            monoFat: product.monoFat,
            cholesterol: product.cholesterol,
            sodium: product.sodium,
            potassium: product.potassium,
            carbs: product.carbs,
            fiber: product.fiber,
            sugar: product.sugar,
            protein: product.protein,
            vitamins: product.vitamins,
            ingredients: product.ingredients,
            allergens: product.allergens,
            price: product.price,
            category: product.category,
            subcategory: product.subcategory,
            starpoints: product.starpoints
        })
        .then(response => {
          console.log(response)
        })
    }
    clearCart() {
        this.props.cart.items.forEach((product) => {
            axios.post('/user', {
                sessionID: this.props.sessionID,
                actionType: "buy",
                quantity: product.quantity,
                name: product.name,
                size: product.size,
                servingSize: product.servingSize,
                servings: product.servings,
                caloriesFromFat: product.caloriesFromFat,
                calories: product.calories,
                totalFat: product.total,
                saturatedFat: product.saturatedFat,
                transFat: product.transFat,
                polyFat: product.polyFat,
                monoFat: product.monoFat,
                cholesterol: product.cholesterol,
                sodium: product.sodium,
                potassium: product.potassium,
                carbs: product.carbs,
                fiber: product.fiber,
                sugar: product.sugar,
                protein: product.protein,
                vitamins: product.vitamins,
                ingredients: product.ingredients,
                allergens: product.allergens,
                price: product.price,
                category: product.category,
                subcategory: product.subcategory,
                starpoints: product.starpoints
            })
                .then(response => {
                    console.log(response)
                })
        })
        axios.post('/user', {
            sessionID: this.props.sessionID,
            actionType: "cartSummary",
            cartPrice: parseFloat(Math.round(this.props.cart.price * 100) * 1.075 / 100).toFixed(2),
            cartItemCount: this.props.cart.count,
            cartTotalStarpoints: this.props.cart.starpoints
         })
        .then(response => {
            console.log(response)
        })
        this.props.handleClearCart()
    }
    listCartItems() {
        const listedItems = this.props.cart.items.map((item) => {
            return (
                <div className='order-item'>
                    <img src={item.imageSrc} className='order-item-image'/>
                    <div className='order-item-name'>{item.name} </div>
                    <span className='order-item-detail'>
                        {item.quantity > 1 &&
                        <span className='order-item-quantity'>{item.quantity} x </span>
                        }
                        <span className='order-item-price'>${parseFloat(Math.round(item.price * 100) / 100).toFixed(2)} </span>
                    </span>
                    <span onClick={() => this.removeFromCart(item)} className='order-delete-item'>X</span>
                </div>
            )
        })
        listedItems.push(
            <div className='order-item bold'>Subtotal
                <span className='order-item-detail normal-height'>
                    <span className='order-item-price bold'>${parseFloat(Math.round(this.props.cart.price * 100) / 100).toFixed(2)}</span>
                </span>
            </div>
        )
        listedItems.push(
            <div className='order-item bold'>Sales tax (7.5%)
                <span className='order-item-detail normal-height'>
                    <span className='order-item-price'>${parseFloat(Math.round(this.props.cart.price * 100) * 0.075 / 100).toFixed(2)}</span>
                </span>
            </div>
        )
        listedItems.push(
            <div className='order-item bold order-final-total'>Total
                <span className='order-item-detail' >${parseFloat(Math.round(this.props.cart.price * 100) * 1.075 / 100).toFixed(2)}</span>
            </div>
        )
        return listedItems
    }

    render() {
        return(
            <div className='order-summary'>
                <div className='order-header-bar bold'>
                    Review Order
                </div>
                {this.listCartItems()}
                <button type='submit' onClick={() => {this.clearCart()}} className='checkout-button bold'>Complete Order</button>
            </div>
        )
    }
}
