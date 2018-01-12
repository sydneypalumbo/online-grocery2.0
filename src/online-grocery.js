/**
 * Created by SPalumbo on 11/16/17.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ProductGrid from './components/product-grid/product-grid'
import TopNav from './components/top-nav/top-nav'
import './online-grocery.scss'
var tabNames = ['Produce', 'Deli & Dairy', 'Bread, Pasta & Rice', 'Packaged & Canned',
'Condiments, Spreads & Sauces', 'Frozen Foods', 'Beverages'];
class HomePage extends Component{
  render(){
      return(
        <div>
            <img className='logo-style' src={require('../public/images/SAFEWAY.png')}/>
            <img className='banner-style' src={require('../public/images/advertisement1.png')}/>
            <TopNav tabNames={tabNames} category={this.props.category}/>
            <ProductGrid/>
        </div>
      )
  }
}
export default HomePage
