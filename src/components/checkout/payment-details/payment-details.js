import React from 'react'
import './payment-details.scss'

export default class PaymentDetails extends React.Component{

    buildCreditCardSection() {
        return(
            <div>
                <div className='payment-details-section'>Name on Card
                    <input className='payment-input' required='required' />
                </div>
                <div className='payment-details-section'>Card Number
                    <input className='payment-input' required='required' />
                </div>
                <div className='payment-details-section'>Expiration Date
                    <input className='payment-input' required='required' placeholder='MM/YYYY'/>
                </div>
                <div className='payment-details-section'>Security Code
                    <input className='payment-input' required='required' placeholder='***'/>
                </div>
            </div>
        )
    }

    buildBillingAddressSection() {
        return(
            <div>
                <div className='payment-details-section'>Name
                    <input className='payment-input' required='required' />
                </div>
                <div className='payment-details-section'>Address Line 1
                    <input className='payment-input' required='required' />
                </div>
                <div className='payment-details-section'>Address Line 2
                    <input className='payment-input' />
                </div>
                <div className='payment-details-section'>City
                    <input className='payment-input' />
                </div>
                <div className='payment-details-section'>State
                    <input className='payment-input' />
                </div>
                <div className='payment-details-section'>ZIP Code
                    <input className='payment-input' />
                </div>
            </div>
        )
    }

    buildShippingAddressSection() {
        return(
            <div>
                <div className='payment-details-section'>Name
                    <input className='payment-input' required='required' />
                </div>
                <div className='payment-details-section'>Address Line 1
                    <input className='payment-input' required='required' />
                </div>
                <div className='payment-details-section'>Address Line 2
                    <input className='payment-input'/>
                </div>
                <div className='payment-details-section'>City
                    <input className='payment-input' required='required'/>
                </div>
                <div className='payment-details-section'>State
                    <input className='payment-input' required='required'/>
                </div>
                <div className='payment-details-section'>ZIP Code
                    <input className='payment-input' required='required'/>
                </div>
            </div>
        )
    }

    render() {
        return(
            <div className='payment-details'>
                <div className='payment-header-bar bold'>Payment Information</div>
                {this.buildCreditCardSection()}
                <div className='payment-header-bar bold'>Billing Address</div>
                {this.buildBillingAddressSection()}
                <div className='payment-header-bar bold'>Shipping Address</div>
                {this.buildShippingAddressSection()}
            </div>
        )
    }
}