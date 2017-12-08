import React from 'react'
import TopNav from './components/top-nav/top-nav'
import ProductPage from "./components/product-page/product-page";
import './online-grocery.scss';

var tabNames = ['Produce', 'Deli & Dairy', 'Bread, Pasta & Rice', 'Packaged & Canned',
    'Condiments, Spreads & Sauces', 'Frozen Foods', 'Beverages'];
var view = "viewProduct"
class ProductViewPage extends React.Component{
  render(){
    return(
    <div>
        <img className='logo-style' src={'../../src/images/SAFEWAY.png'}/>
        <img className='banner-style' src={'../../src/images/advertisement1.png'}/>
        <TopNav tabNames={tabNames} view={view}/>
        <ProductPage/>
    </div>
    )
  }
}
export default ProductViewPage
