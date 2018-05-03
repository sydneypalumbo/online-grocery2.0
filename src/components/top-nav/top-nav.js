import React from "react";
import Tab from '../tab/tab.js';
import './top-nav.scss'
import axios from 'axios'
import Search from '../search/search'

export default class TopNav extends React.Component{

    getInitialData() {
        axios.get('/category', {params: {category: this.props.category, subcategory: this.props.subcategory, offset: (this.props.page - 1) * 48}})
            .then(res => {
                this.props.handleSetProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        axios.get('/categories')
            .then(res => {
                this.props.handleSetCategories(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        axios.get('/subcategories')
            .then(res => {
                this.props.handleSetSubcategories(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }

    componentDidMount() {
        this.getInitialData()
    }

    render () {
        let subcats = Object.assign([], this.props.subcategories)
        let tabs = this.props.categories.map((tab, key)=> {
            let tabSubcats = []
            while (subcats.length > 0 && subcats[0].id == tab.id) {
                tabSubcats.push(subcats.shift())
            }
            return (
                <Tab tabName={tab.name} key={key} index={tab.id} subcats={tabSubcats}
                     subcategory={this.props.subcategory} category={this.props.category}
                     handleSetCategory={this.props.handleSetCategory}
                     handleSetProducts={this.props.handleSetProducts}
                     handleClearPage={this.props.handleClearPage}
                     page={this.props.page}/>
            );
        });
        return (
            <div>
                <div className="top-nav">
                    {tabs}
                </div>
                {this.props.categories[this.props.category - 1] &&
                    <div className= "title"> {this.props.categories[this.props.category - 1].name} </div>
                }
                <div className= "subtitle"> {this.props.subcategoryName} </div>
                <div className= "count"> {this.props.count} items</div>
                <Search handleSetProducts={this.props.handleSetProducts} sessionID={this.props.sessionID}/>
            </div>
        );
    }
};
