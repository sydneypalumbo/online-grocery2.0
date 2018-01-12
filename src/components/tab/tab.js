import React from "react";
import { Router, Link, Switch } from 'react-router-dom';
import './tab.scss';

export default class Tab extends React.Component{

    render () {
      var link = '/'+ this.props.tabName
      if(this.props.tabName == this.props.category){
        return(
           <div className="tab-container selected" onClick= {this.props.selectTab}>
               <div className="tab">
                   {this.props.tabName}
               </div>
           </div>
         )
       }
       else{
             return(
                <div className="tab-container">
                    <Link to={link} className="tab">
                        {this.props.tabName}
                    </Link>
                </div>
              )
        }
      }




};
