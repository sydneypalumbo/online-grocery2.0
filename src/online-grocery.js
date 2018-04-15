import React from 'react'
import ProductGridContainer from './components/product-grid/product-grid-container'
import TopNav from './components/top-nav/top-nav'
import CartDropdownContainer from './components/cart-dropdown/cart-dropdown-container'
import './online-grocery.scss'
var path = require('path')

const tabNames = ['Produce', 'Deli & Dairy', 'Bread, Pasta & Rice', 'Packaged & Canned',
'Condiments, Spreads & Sauces', 'Frozen Foods', 'Beverages'];


class HomePage extends React.Component{
  render(){
      return(
        <div>
            <CartDropdownContainer/>
            <img className='logo-style' src={`${path.join(__dirname, 'images/howesgrocerybanner.png')}`}/>
            <TopNav tabNames={tabNames} handleSetCategory={this.props.handleSetCategory}
                    handleSetProducts={this.props.handleSetProducts} selected={this.props.selected || 1} />
            <ProductGridContainer/>
        </div>
      )
  }
}
export default HomePage
