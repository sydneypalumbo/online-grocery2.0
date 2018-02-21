import React from "react";
import './tab.scss';

export default class Tab extends React.Component{

    render () {
        return(
           <div className={this.props.index == this.props.selected ? "tab-container selected" : "tab-container"}
           onClick={this.props.onClick}>
               <div className="tab">
                   {this.props.tabName}
               </div>
           </div>
        )
    }

};
