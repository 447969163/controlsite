import React, { Component, Fragment } from "react";
import "./index.css";
import Menu from "../menu/index";
export default class WxManagement extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <div className="wx-management-container">
                    <Menu selectedIndex="4" />
                    <div className="wx-management-content">
                        dsad
                </div>
                </div>
            </Fragment>
        )
    }
}