'use strict'
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './online-grocery-container'
import ProductViewPage from './product-page'
import CheckoutPage from './checkout-page'
import ThankYouPage from './thank-you-page'
import SessionIDPage from './session-id-container'
import Store from './reducers/createStore'
import { Provider } from 'react-redux'
import SearchPageContainer from './search-page-container'
import { PersistGate } from 'redux-persist/integration/react'

render(
	<Provider store={Store.store}>
		<PersistGate loading={null} persistor={Store.persistor}>
			<Router>
				<Switch>
					<Route exact path="/" component={SessionIDPage}/>
						<Route path= "/home"component={HomePage} />
					  <Route path="/product" component={ProductViewPage}/>
						<Route path="/search" component={SearchPageContainer}/>
						<Route path="/checkout" component={CheckoutPage}/>
						<Route path="/thank-you" component={ThankYouPage}/>
				</Switch>
			</Router>
		</PersistGate>
	</Provider>,
	document.getElementById('main')
)
