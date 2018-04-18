import React from "react";
import './tab.scss';

export default class Tab extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            open: false
        }

        this.openDropdown = this.openDropdown.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
    }

    openDropdown() {
        this.setState({
            open: true
        })
    }

    closeDropdown() {
        this.setState({
            open: false
        })
    }

    buildSubcategories() {
        return this.props.subcats.map((subcat) => {
            return(
                <div className="tab-subcat-bar">
                    <div className="tab-subcat-title">
                        {subcat.name}
                    </div>
                </div>
            )
        })
    }

    render () {
        return(
           <div className={this.props.index == this.props.selected ? "tab-container selected" : "tab-container"}
           onClick={this.props.onClick} onMouseEnter={() => {this.openDropdown()}} onMouseLeave={() => {this.closeDropdown()}}>
               <div className="tab">
                   {this.props.tabName}
               </div>
               {this.state.open &&
                   <div className="tab-dropdown">
                       {this.buildSubcategories()}
                   </div>
               }
           </div>
        )
    }

};
