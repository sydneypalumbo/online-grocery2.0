import React from 'react'
import './online-grocery.scss'
var path = require('path')
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class SessionIDPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    console.log(this.state.value)
    event.preventDefault()
    axios.post('/user', {
      sessionID:this.state.value

    })
    .then(response => {
    	console.log(response)
    })
    .then(this.props.history.push('/home'))
    .catch(error => {
        console.log(error)
    });

  }
  render(){
      return(
            <div className= "form-container">
            <form className="form-style" onSubmit= {this.handleSubmit}>
              <div className="form-prompt"> Please enter your session ID given to you by Qualtrics:</div>
              <input className="form-input" type='text' value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </form>
            </div>
      )
  }
}
export default withRouter(SessionIDPage)
