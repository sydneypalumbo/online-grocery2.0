import React from 'react'
import ProductGrid from './components/product-grid/product-grid'
import TopNav from './components/top-nav/top-nav'
import CartDropdownContainer from './components/cart-dropdown/cart-dropdown-container'
import './online-grocery.scss'
var path = require('path')

const tabNames = ['Produce', 'Deli & Dairy', 'Bread, Pasta & Rice', 'Packaged & Canned',
'Condiments, Spreads & Sauces', 'Frozen Foods', 'Beverages'];

var view = "viewAll"
class HomePage extends React.Component{
  render(){
      return(
        <div>
            <CartDropdownContainer/>
            <img className='logo-style' src={`${path.join(__dirname, 'images/howesgrocerybanner.png')}`}/>
            <TopNav tabNames={tabNames} handleSetCategory={this.props.handleSetCategory}
                    selected={this.props.selected || 1} view={view}/>
            <ProductGrid selected={this.props.selected || 1} />
        </div>
      )
  }
}
export default HomePage
