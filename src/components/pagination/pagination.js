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
        let offset = this.props.page * 48;
        axios.get('/category', {params: {category: this.props.category, subcategory: this.props.subcategory, offset:offset}})
            .then(res => {
                this.props.handleSetProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            this.props.handleNextPage(this.props.page)
            window.scrollTo(0, 0)


  }
  handlePrevious(){
    let offset = (this.props.page - 2) * 48
    axios.get('/category', {params: {category: this.props.category, subcategory: this.props.subcategory, offset:offset}})
        .then(res => {
            this.props.handleSetProducts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        this.props.handlePreviousPage(this.props.page)
        window.scrollTo(0, 0)
  }

  render(){
      return(
          <div className= "page-number-container">
              {this.props.page != 1 &&
              <div className= "page-change" onClick={this.handlePrevious} > Previous </div>
              }
              {this.props.page == 1 &&
              <div className="page-placeholder"/>
              }
              <div className= "page-number"> {this.props.page} </div>
              {(this.props.count / 48) > this.props.page &&
              <div className="page-change" onClick={this.handleNext}> Next </div>
              }
              {(this.props.count / 48) <= this.props.page &&
              <div className="page-placeholder"/>
              }
          </div>
      )
  }
}
export default PaginationPage
