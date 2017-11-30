import React from 'react'

export default class CartDropdown extends React.Component {

    render() {
        return (
            <div>{this.props.cart.count}</div>
        )
    }
}