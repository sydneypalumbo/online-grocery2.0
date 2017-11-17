import React from 'react'
import './product-card.scss'

export default class ProductCard extends React.Component {
    render() {
        return (
            <div className='product-card'>
                <img className='product-card-image' src={this.props.src}/>
                <div className='product-card-name'>{this.props.name}</div>
                <div className='product-card-size'>{this.props.size}</div>
                <div className='product-card-buttons'>
                    <div className='product-card-price'>${this.props.price}</div>
                    <img className='product-card-add-to-cart' src={'../../../src/images/trolley-clipart.png'}/>
                </div>
            </div>
        )
    }
}