import React from 'react'
import TopNav from './components/top-nav/top-nav'
import ProductCardExpandedContainer from "./components/product-card-expanded/product-card-expanded-container";
import './online-grocery.scss';
import CartDropdownContainer from './components/cart-dropdown/cart-dropdown-container'

const tabNames = ['Produce', 'Deli & Dairy', 'Bread, Pasta & Rice', 'Packaged & Canned',
    'Condiments, Spreads & Sauces', 'Frozen Foods', 'Beverages'];

var view = "viewProduct"

const product = {
    name: "Ritz Crackers",
    src: "http://www.publix.com/images/products/300000/304781-600x600-A.jpg",
    price: 10,
    description: "Per 5 Crackers: 80 calories; 1 g sat fat (5% DV); 105 mg sodium (4% DV); 1 g sugars. Keep it going. 100% recycled paperboard. Please recycle this carton. Minimum 35% post-consumer content. You've got the stuff to make life rich. For these recipes and more, visit Ritzcrackers.com. Life's rich. SmartLabel. Visit us at: ritzcrackers.com or call weekdays: 1-800-622-4726. Please have package available. Made in Mexico.",
    size: "13.7 oz (388 g)"
}

class ProductViewPage extends React.Component{
  render(){
    return(
    <div>
        <CartDropdownContainer/>
        <img className='logo-style' src={'../../src/images/howesgrocerybanner.png'}/>
        <TopNav tabNames={tabNames} view={view}/>
        <ProductCardExpandedContainer {...product}/>
    </div>
    )
  }
}
export default ProductViewPage
