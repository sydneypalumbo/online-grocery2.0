import React from "react";
import Tab from '../tab/tab.js';
import './top-nav.scss'

export default class TopNav extends React.Component{

    render () {
        let tabs = this.props.tabNames.map(function(name) {
            return (
                <Tab tabName={name}/>
            );
        });

        return (
            <div className="top-nav">
                {tabs}
            </div>
        );
    }
};