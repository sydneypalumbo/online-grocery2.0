import React from 'react'
import './product-card-expanded.scss'

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
                <img className='product-card-expanded-image' src={this.props.src}/>
                <div className='product-card-expanded-name'>{this.props.name}</div>
                <div className='product-card-expanded-description'>{this.props.description}</div>
                <div className='product-card-expanded-size'>{this.props.size}</div>
                <div className='product-card-expanded-buttons'>
                    <div className='product-card-expanded-price'>${this.props.price}</div>
                    <img className='product-card-expanded-add-to-cart' onClick={this.handleAddToCart}
                         src={'../../../src/images/trolley-clipart.png'}/>
                    <div className='product-card-expanded-quantity'>
                        <div className='product-card-expanded-quantity-change' onClick={this.subtractQuantity}>-</div>
                        {this.state.quantity}
                        <div className='product-card-expanded-quantity-change' onClick={this.addQuantity}>+</div>
                    </div>
                </div>
            </div>
        )
    }
}