import React from 'react'
import './online-grocery.scss'
import SessionIDPage from 'session-id-page'
var path = require('path')
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux'
import { userActionCreators } from './reducers/user/user-actions';

const mapStateToProps = function(state){
    return {
        sessionID: state.sessionID.sessionID
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleSetUser: (sessionID) => {
            dispatch(userActionCreators.setUser(sessionID))
        }
    }
}


class SessionIDContainer extends React.Component{

  render(){
      return(
          <SessionIDPage {...this.props} />
      )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SessionIDContainer)
