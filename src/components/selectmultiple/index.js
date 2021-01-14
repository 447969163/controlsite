import React, { Component, Fragment } from 'react'
import "./index.css";
export default class selectmultiple extends Component {
    constructor(props){
        super(props)
        this.state = {
            optionRegionStatus: false
        }
    }
    showOption(){
        this.setState({
            optionRegionStatus: !this.state.optionRegionStatus
        })
    }
    render(){
        const {optionRegionStatus} = this.state
        return(
            <div className="select-multi-container">
                <div className="imitate-select">
                <span onClick={()=>{this.showOption()}}>请选择选项</span>
                </div>
                {optionRegionStatus && <div className="option-region">111</div>}
            </div>
        )
    }
}