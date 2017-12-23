import React from 'react'
import './cart-dropdown.scss'

export default class CartDropdown extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            dropdownOpen: false,
            windowHeight: 0
        }

        this.openCloseDropdown = this.openCloseDropdown.bind(this)
        this.removeFromCart = this.removeFromCart.bind(this)
    }

    openCloseDropdown() {
        const currentlyOpen = this.state.dropdownOpen
        const height = window.innerHeight
        if (this.props.cart.items.length > 0) {
            this.setState({
                dropdownOpen: !currentlyOpen,
                windowHeight: height

            })
        }
    }

    removeFromCart(product) {
        this.props.handleRemoveFromCart(product)
    }

    render() {
        const cartItems = this.props.cart.items.map((item) => {
            return (
                <div className='cart-item'>
                    <span>{item.name} </span>
                    <span className='cart-price'>${item.price} </span>
                    <span onClick={() => this.removeFromCart(item)} className='cart-delete-item'>X</span>
                </div>
            )
        })
        cartItems.unshift(
            <div className='cart-item cart-checkout-bar'>Checkout
                <span className='cart-price' >Total: ${this.props.cart.price}</span>
            </div>
        )
        return (
            <div className='cart-button' onClick={this.openCloseDropdown}>
                <img className='cart-image' src={'../../../src/images/trolley-clipart-white.png'}/>
                <div className='cart-count'>{this.props.cart.count}</div>
                {this.state.dropdownOpen && this.props.cart.items.length > 0 &&
                    <div style={{'max-height': this.state.windowHeight - 75}} className='cart-dropdown'>
                        {cartItems}
                    </div>
                }
            </div>
        )
    }
}