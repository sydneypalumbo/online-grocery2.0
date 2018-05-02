import React from 'react'
import ProductCardExpandedContainer from "./components/product-card-expanded/product-card-expanded-container";
import './online-grocery.scss';
import CartDropdownContainer from './components/cart-dropdown/cart-dropdown-container'
import { Link } from 'react-router-dom'

const staticText = {
    browse: 'Back to Browse by Category'
}

var path = require('path')

class ProductViewPage extends React.Component{
  constructor(props) {
          super(props);
  }
  render(){
    const product = this.props.location.state.product
    const sessionID = this.props.location.state.sessionID
    window.scrollTo(0, 0)
    return(
    <div>
        <CartDropdownContainer sessionID={sessionID}/>
        <img className='logo-style' src={`${path.join(__dirname, 'images/howesgrocerybanner.png')}`}/>
        <Link to={{ pathname: '/home'}}>
            <div className='back-to-browse-from-product'>{staticText.browse}</div>
        </Link>
        <ProductCardExpandedContainer sessionID={sessionID} {...product}/>
    </div>
    )
  }
}
export default ProductViewPage
