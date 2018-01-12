import React from "react";
import Tab from '../tab/tab.js';
import './top-nav.scss'

export default class TopNav extends React.Component{
    constructor (props){
      super(props)
      this.state={
        category: this.props.category
      }
    }
    render () {
        let category = this.state.category;
        let tabs = this.props.tabNames.map((name,i)=> {

            return (
                <Tab tabName={name} category={category} key={i} />
            );
        });
        var title= "Viewing All"

        return (
          <div>
            <div className="top-nav">
                {tabs}
            </div>
            <div className= "title"> {title}{this.state.category} </div>
          </div>
        );
    }
};
