import React from "react";
import Tab from '../tab/tab.js';
import './top-nav.scss'

export default class TopNav extends React.Component{

    render () {
        let tabs = this.props.tabNames.map((name, i)=> {
            return (
                <Tab onClick={() => this.props.handleSetCategory(i + 1)} tabName={name} index={i + 1} selected={this.props.selected}/>
            );
        });
        return (
          <div>
            <div className="top-nav">
                {tabs}
            </div>
              {this.props.tabNames[this.props.selected - 1] &&
                  <div className= "title"> {this.props.tabNames[this.props.selected - 1]} </div>}
          </div>
        );
    }
};
