import React from 'react'
import OrderSummary from './order-summary'
import { connect } from 'react-redux'
import { cartActionCreators } from '../../../reducers/cart/cart-actions';

const mapStateToProps = function(state){
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleRemoveFromCart: (product) => {
            dispatch(cartActionCreators.removeFromCart(product))
        }
    }
}

class OrderSummaryContainer extends React.Component {
    render() {
        return (
            <OrderSummary {...this.props} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummaryContainer)

