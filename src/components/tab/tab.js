import React from "react";
import './tab.scss';
import axios from 'axios'

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
        return this.props.subcats.map((subcat, key) => {
            if (subcat.subid == this.props.subcategory && this.props.index == this.props.category) {
                return (
                    <div className="tab-subcat-bar selected-subcat" key={key}>
                        <div className="tab-subcat-title" key={key}>
                            {subcat.name}
                        </div>
                    </div>
                )
            }
            return(
                <div className="tab-subcat-bar" key={key} onClick={() => {
                    axios.get('/category', {params: {category: this.props.index, subcategory: subcat.subid, offset:0}})
                        .then(res => {
                            this.props.handleSetProducts(res.data)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                    this.props.handleClearPage()
                    this.props.handleSetCategory(this.props.index, subcat.subid, subcat.name)
                }}>
                    <div className="tab-subcat-title" key={key}>
                        {subcat.name}
                    </div>
                </div>
            )
        })
    }

    render () {
        return(
           <div className={this.props.index == this.props.category ? "tab-container selected" : "tab-container"}
                onMouseEnter={() => {this.openDropdown()}} onMouseLeave={() => {this.closeDropdown()}}>
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
