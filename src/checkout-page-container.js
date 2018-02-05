import React from 'react'
import CheckoutPage from './checkout-page'
import { connect } from 'react-redux'
import { cartActionCreators } from './reducers/cart/cart-actions';

const mapStateToProps = function(state){
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleClearCart: () => {
            dispatch(cartActionCreators.clearCart())
        }
    }
}

class CheckoutPageContainer extends React.Component {
    render() {
        return (
            <CheckoutPage {...this.props} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPageContainer)

