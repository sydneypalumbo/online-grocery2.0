import React from 'react'
import './search-page.scss'
import CartDropdownContainer from './components/cart-dropdown/cart-dropdown-container'
import ProductGridContainer from './components/product-grid/product-grid-container'
var path = require('path')
import { Link } from 'react-router-dom'
import Search from './components/search/search'

const staticText = {
    browse: 'Back to Browse by Category',
    enterSearch: 'Please search for any product in the bar above!',
    title: 'Search Results'
}

class SearchPage extends React.Component{
    constructor(props) {
          super(props);
    }

    componentDidMount() {
        window.onpopstate = () => {
            this.props.handleSetProducts([])
        }
    }


    render(){
    return(
    <div>
        <CartDropdownContainer/>
        <img className='logo-style' src={`${path.join(__dirname, 'images/howesgrocerybanner.png')}`}/>
        <div className= 'title'>{staticText.title}</div>
        <Link to={{ pathname: '/home'}}>
            <div className='subtitle'>{staticText.browse}</div>
        </Link>
        <Search handleSetProducts={this.props.handleSetProducts} sessionID={this.props.sessionID}/>
        {this.props.products && this.props.products.length == 0 &&
            <div className='search-prompt'>{staticText.enterSearch}</div>
        }
        <ProductGridContainer pageType='search-page'/>
    </div>
    )
    }
}
export default SearchPage
