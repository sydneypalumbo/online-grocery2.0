import React from "react";
import './tab.scss';

export default class Tab extends React.Component{

    render () {
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
                <div className="tab-container" onClick= {this.props.selectTab}>
                    <div className="tab">
                        {this.props.tabName}
                    </div>
                </div>
              )
        }
      }




};
