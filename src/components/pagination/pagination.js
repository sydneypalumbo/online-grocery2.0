import React from 'react'
import './pagination.scss'
import axios from 'axios';

class PaginationPage extends React.Component{
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }
  handleNext(){
        let offset = this.props.page.page * 48;
        axios.get('/category', {params: {category: this.props.category.category, subcategory: this.props.category.subcategory, offset:offset}})
            .then(res => {
                this.props.handleSetProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            this.props.handleNextPage(this.props.page.page)
            window.scrollTo(0, 0)


  }
  handlePrevious(){
    let offset = this.props.page.page - 2;
    offset = offset * 48
    axios.get('/category', {params: {category: this.props.category.category, subcategory: this.props.category.subcategory, offset:offset}})
        .then(res => {
            this.props.handleSetProducts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        this.props.handlePreviousPage(this.props.page.page)
        window.scrollTo(0, 0)
  }

  render(){
      if (this.props.page.page != 1){
        return(
          <div className= "page-number-container">
            <div className= "page-change" onClick={this.handlePrevious} > Previous </div>
            <div className= "page-number"> {this.props.page.page} </div>
            <div className= "page-change" onClick={this.handleNext} > Next </div>
          </div>
        )
      }
      return(
        <div className= "page-number-container">
          <div className= "page-number"> {this.props.page.page} </div>
          <div className= "page-change" onClick={this.handleNext} > Next </div>
        </div>
      )
  }
}
export default PaginationPage
