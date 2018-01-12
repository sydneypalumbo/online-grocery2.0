/**
 * Created by melaniegoetz on 11/26/17.
 */
/**
 * Created by SPalumbo on 11/16/17.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TopNav from './components/top-nav/top-nav'
import ProductPage from "./components/product-page/product-page";
import './online-grocery.scss';

var tabNames = ['Produce', 'Deli & Dairy', 'Bread, Pasta & Rice', 'Packaged & Canned',
    'Condiments, Spreads & Sauces', 'Frozen Foods', 'Beverages'];

class ProductViewPage extends Component{
  render(){
    return(
    <div>
        <img className='logo-style' src={require('../public/images/SAFEWAY.png')}/>
        <img className='banner-style' src={require('../public/images/advertisement1.png')}/>
        <TopNav tabNames={tabNames}/>
        <ProductPage/>
    </div>
    )
  }
}
export default ProductViewPage
