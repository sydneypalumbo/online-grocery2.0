import React from 'react'
import './session-id-page.scss'
import {
  withRouter
} from "react-router-dom";

const staticText = {
  welcome: `Welcome to Howe's Grocery`,
  submit: 'Start Shopping!',
  prompt: 'Please enter your session ID given to you by Qualtrics:'
}

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
    event.preventDefault()
    if (this.state.value != '') {
      this.props.handleSetUser(this.state.value)
      this.props.history.push({
        pathname: '/home'
      })
    }

  }
  render(){
    return(
            <div className= "form-container">
              <form className="form-style" onSubmit= {this.handleSubmit}>
                <div className="form-header">{staticText.welcome}</div>
                <div className="form-prompt">{staticText.prompt}</div>
                <input className="form-input" type='text' value={this.state.value} onChange={this.handleChange} />
                <button className='form-button bold' type="submit">{staticText.submit}</button>
              </form>
            </div>
      )
  }
}
export default withRouter(SessionIDPage)
