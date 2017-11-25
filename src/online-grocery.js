/**
 * Created by SPalumbo on 11/16/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import ProductGrid from './components/product-grid/product-grid'
import TopNav from './components/top-nav/top-nav'

var tabNames = ['Produce', 'Deli & Dairy', 'Bread, Pasta & Rice', 'Packaged & Canned',
'Condiments, Spreads & Sauces', 'Frozen Foods', 'Beverages'];

ReactDOM.render(
<div>
    <TopNav tabNames={tabNames}/>
    <ProductGrid/>
</div>,
    document.body
);
