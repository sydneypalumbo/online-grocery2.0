import React from 'react'
import OrderSummaryContainer from './components/checkout/order-summary/order-summary-container'
import PaymentDetails from './components/checkout/payment-details/payment-details'
import './checkout-page.scss'

export default class CheckoutPage extends React.Component {
    render() {
        return(
            <div>
                <img className='logo-style' src={'../../src/images/howesgrocerybanner.png'}/>
                <div className='checkout-title'>Checkout</div>
                <form className='checkout-sections'>
                    <PaymentDetails/>
                    <OrderSummaryContainer/>
                </form>
            </div>
        )
    }
}