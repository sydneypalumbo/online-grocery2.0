import React from 'react'
import './order-summary.scss'

export default class OrderSummary extends React.Component{

    listCartItems() {
        const listedItems = this.props.cart.items.map((item) => {
            return (
                <div className='order-item'>
                    <span>{item.name} </span>
                    <span className='order-item-detail'>
                        {item.quantity > 1 &&
                        <span className='order-item-quantity'>{item.quantity} x </span>
                        }
                        <span className='order-item-price'>${parseFloat(Math.round(item.price * 100) / 100).toFixed(2)} </span>
                    </span>
                    <span onClick={() => this.props.handleRemoveFromCart(item)} className='order-delete-item'>X</span>
                </div>
            )
        })
        listedItems.push(
            <div className='order-item bold'>Subtotal
                <span className='order-item-detail'>
                    <span className='order-item-price bold'>${parseFloat(Math.round(this.props.cart.price * 100) / 100).toFixed(2)}</span>
                </span>
            </div>
        )
        listedItems.push(
            <div className='order-item bold'>Sales tax (7.5%)
                <span className='order-item-detail'>
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
                <button className='checkout-button bold'>Complete Order</button>
            </div>
        )
    }
}