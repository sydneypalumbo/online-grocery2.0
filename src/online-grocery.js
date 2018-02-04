import React from 'react'
import ProductGrid from './components/product-grid/product-grid'
import TopNav from './components/top-nav/top-nav'
import CartDropdownContainer from './components/cart-dropdown/cart-dropdown-container'
import './online-grocery.scss'

const tabNames = ['Produce', 'Deli & Dairy', 'Bread, Pasta & Rice', 'Packaged & Canned',
'Condiments, Spreads & Sauces', 'Frozen Foods', 'Beverages'];

var view = "viewAll"
class HomePage extends React.Component{
  render(){
      return(
        <div>
            <CartDropdownContainer/>
            <img className='logo-style' src={'../../src/images/howesgrocerybanner.png'}/>
            <TopNav tabNames={tabNames} view={view}/>
            <ProductGrid/>
        </div>
      )
  }
}
export default HomePage
