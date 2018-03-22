import React from 'react'
import TopNav from './components/top-nav/top-nav'
import ProductCardExpandedContainer from "./components/product-card-expanded/product-card-expanded-container";
import './online-grocery.scss';
import CartDropdownContainer from './components/cart-dropdown/cart-dropdown-container'

const tabNames = ['Produce', 'Deli & Dairy', 'Bread, Pasta & Rice', 'Packaged & Canned',
    'Condiments, Spreads & Sauces', 'Frozen Foods', 'Beverages'];

var view = "viewProduct"
var path = require('path')

class ProductViewPage extends React.Component{
  constructor(props) {
          super(props);
  }
  render(){
    const product = this.props.location.state.product
    return(
    <div>
        <CartDropdownContainer/>
        <img className='logo-style' src={`${path.join(__dirname, 'images/howesgrocerybanner.png')}`}/>
        <TopNav tabNames={tabNames} view={view}/>
        <ProductCardExpandedContainer {...product}/>
    </div>
    )
  }
}
export default ProductViewPage
