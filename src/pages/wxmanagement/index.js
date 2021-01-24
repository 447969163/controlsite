import React, { Component, Fragment } from "react";
import "./index.css";
export default class WxManagement extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <div className="wx-management-container">
                    小程序设置
                </div>
            </Fragment>
        )
    }
}