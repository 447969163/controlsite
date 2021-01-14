import React, { Component, Fragment } from 'react'
import './index.css'
export default class NavTag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tagArr: []
        }
    }
    render() {
        const {tagArr} = this.state
        return (
            <Fragment>
                <div className="nav-tag-container">
                    {tagArr&&tagArr.map((item,i)=>{
                        return <span key={i}>{item}</span>
                    })}
                </div>
            </Fragment>
        )
    }
}