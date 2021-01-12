import React, { Component, Fragment } from "react";
import "./index.css";
import Menu from "../menu/index";
export default class adManagement extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <div className="ad-management-container">
                    <Menu selectedIndex="2" />
                    <div className="ad-management-content">
                        jjjj
                    </div>
                </div>
            </Fragment>
        )
    }
}