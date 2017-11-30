import React from 'react'
import CartDropdown from './cart-dropdown'
import { connect } from 'react-redux'
import { cartActionCreators } from '../../reducers/cart/cart-actions';

const mapStateToProps = function(state){
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleRemoveFromCart: () => {
            dispatch(cartActionCreators.removeFromCart())
        }
    }
}

class CartDropdownContainer extends React.Component {
    render() {
        console.log(this.props)
        return (
            <CartDropdown {...this.props} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdownContainer)

