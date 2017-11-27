/**
 * Created by melaniegoetz on 11/26/17.
 */
/**
 * Created by SPalumbo on 11/16/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import TopNav from './components/top-nav/top-nav'
import ProductPage from "./components/product-page/product-page";

var tabNames = ['Produce', 'Deli & Dairy', 'Bread, Pasta & Rice', 'Packaged & Canned',
    'Condiments, Spreads & Sauces', 'Frozen Foods', 'Beverages'];

ReactDOM.render(
    <div>
        <TopNav tabNames={tabNames}/>
        <ProductPage/>
    </div>,
    document.body
);
