import React from "react";
import './tab.scss';

export default class Tab extends React.Component{
    render () {
        return (
            <div className="tab-container">
                <div className="tab">
                    {this.props.tabName}
                </div>
            </div>
        );
    }
};