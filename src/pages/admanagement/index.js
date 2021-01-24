import React, { Component, Fragment } from "react";
import "./index.css";
export default class adManagement extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <div className="ad-management-container">
                    广告管理
                </div>
            </Fragment>
        )
    }
}