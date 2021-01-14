import React, { Component, Fragment } from "react";
// import Menu from "../menu";
import Editor from "../../components/editor";
import "./index.css";
export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    getTitleContent(e){
        this.setState(
            {
                title: e.target.value
            }
        )
    }
    render() {
        const {title} = this.state
        return (
            <Fragment>
                <div className="article-container">
                    {/* <Menu /> */}
                    <div className="article-content">
                        <div className="title-editor">
                            <input type="text" placeholder="请输入标题" onChange={(e)=>{this.getTitleContent(e)}}/>
                        </div>
                        <div className="select-category">
                            {/* <select>
                                <option value={item.optionId}>{item.optionName}</option>
                            </select> */}
                        </div>
                        <div className="article-edior">
                            <Editor title={title}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}