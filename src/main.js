'use strict'
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import HomePage from './online-grocery'
import ProductViewPage from './product-page'
import CheckoutPage from './checkout-page'
import ThankYouPage from './thank-you-page'
import store from './reducers/createStore'
import { Provider } from 'react-redux'

render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage}/>
			  	<Route path="/product" component={ProductViewPage}/>
				<Route path="/checkout" component={CheckoutPage}/>
				<Route path="/thank-you" component={ThankYouPage}/>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('main')
)
