'use strict'
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import HomePage from './online-grocery'
import ProductViewPage from './product-page'

render(
  <Router>
  	<Switch>
    	<Route exact path='/' component={HomePage}/>
      <Route path='/:category' component={HomePage}/>
      <Route path='/:category/:product' component={ProductViewPage}/>
  	</Switch>
  </Router>,
	document.getElementById('main')
)
