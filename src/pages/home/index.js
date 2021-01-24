import React, { Component, Fragment } from "react";
import "./index.css";
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <div className="home-container">
                    首页
                </div>
            </Fragment>
        )
    }
}