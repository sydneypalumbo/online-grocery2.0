import React from 'react'
import { Router, Link, Switch } from 'react-router-dom';
import './product-card.scss'

export default class ProductCard extends React.Component {

    render() {
        var link= '/'+ this.props.category +  '/' +this.props.name;
        return (
            <div className='product-card'>
                <img className='product-card-image' src={this.props.src}/>
                <Link to={link} className='product-card-name-small'>{this.props.name}</Link>
                <div className='product-card-size'>{this.props.size}</div>
                <div className='product-card-buttons'>
                    <div className='product-card-price'>${this.props.price}</div>
                    <img className='product-card-add-to-cart' src={require('../../../public/images/trolley-clipart.png')}/>
                </div>
            </div>
        )
    }
}
