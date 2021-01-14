import React, { Component, Fragment } from "react";
// import Menu from "../menu";
import Editor from "../../components/editor";
import "./index.css";
export default class Article extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <div className="article-container">
                    {/* <Menu /> */}
                    <div className="article-content">
                        <div className="title-editor">
                            <input type="text" placeholder="请输入标题"/>
                        </div>
                        <div className="select-category">
                            {/* <select>
                                <option value={item.optionId}>{item.optionName}</option>
                            </select> */}
                        </div>
                        <div className="article-edior">
                            <Editor />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}