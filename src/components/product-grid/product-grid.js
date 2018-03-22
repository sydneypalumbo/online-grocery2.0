import React from 'react'
import './product-grid.scss'
import ProductCardContainer from '../product-card/product-card-container'

export default class ProductGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch(`/api/products`)
            .then((response) => response.json())
            .then((response) =>
            {
                this.setState({
                products: response.products
            })})
    }

    render() {
        let selected = this.props.selected
        if (selected == 1){
          selected =8;
        }
        if (selected == 2){
          selected =8;
        }
        var products= this.state.products.filter(function(product){
          let category= product.category;
          if(category == selected){
            return true;
          }
          else{
            return false;
          }
        })
        let productCards = products.map((product,i) => {
            return (
                <div key={i} className='product-grid-item'>
                    <ProductCardContainer product={product}/>
                </div>
            )
        })
        return (
            <div>{productCards}</div>
        )
    }

}
