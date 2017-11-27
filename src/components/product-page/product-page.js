/**
 * Created by melaniegoetz on 11/25/17.
 */
import React from 'react'
import ProductCardExpanded from '../product-card-expanded/product-card-expanded'

const products = [{
    name: "Ritz Crackers",
    src: "http://www.publix.com/images/products/300000/304781-600x600-A.jpg",
    price: 10,
    description: "Per 5 Crackers: 80 calories; 1 g sat fat (5% DV); 105 mg sodium (4% DV); 1 g sugars. Keep it going. 100% recycled paperboard. Please recycle this carton. Minimum 35% post-consumer content. You've got the stuff to make life rich. For these recipes and more, visit Ritzcrackers.com. Life's rich. SmartLabel. Visit us at: ritzcrackers.com or call weekdays: 1-800-622-4726. Please have package available. Made in Mexico.",
    size: "13.7 oz (388 g)"
    }]

export default class ProductPage extends React.Component {


    render() {
        let productCards = products.map(product => {
            return (
                <div className='product-page-item'>
                    <ProductCardExpanded {...product}/>
                </div>
            )
        })
        return (
            <div>{productCards}</div>
        )
    }

}