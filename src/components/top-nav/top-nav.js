import React from "react";
import Tab from '../tab/tab.js';
import './top-nav.scss'
import axios from 'axios'

export default class TopNav extends React.Component{

    getInitialData() {
        axios.get('/category', {params: {category: 1}})
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
        let tabs = this.props.categories.map((tab)=> {
            let tabSubcats = []
            while (subcats.length > 0 && subcats[0].id == tab.id) {
                tabSubcats.push(subcats.shift())
                console.log(this.props.subcategories)
            }
            return (
                <Tab onClick={() => {
                    axios.get('/category', {params: {category: tab.id}})
                    .then(res => {
                        this.props.handleSetProducts(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    this.props.handleSetCategory(tab.id)
                }
                } tabName={tab.name} index={tab.id} subcats={tabSubcats} selected={this.props.selected}/>
            );
        });
        return (
          <div>
            <div className="top-nav">
                {tabs}
            </div>
              {this.props.categories[this.props.selected - 1] &&
                  <div className= "title"> {this.props.categories[this.props.selected - 1].name} </div>}
          </div>
        );
    }
};
