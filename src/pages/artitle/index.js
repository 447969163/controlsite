import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom'
// import Menu from "../menu";
import Editor from "../../components/editor";
import SelectMultiple from "../../components/selectmultiple"
import "./index.css";
class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    getTitleContent(e) {
        this.setState(
            {
                title: e.target.value
            }
        )
    }
    // componentDidMount(){
    //     if(this.props.match.params.id) {
    //         console.log('修改文章')
    //     }
    //     if (!this.props.match.params.id) {
    //         console.log('新增文章')
    //     }
    // }
    render() {
        const { title } = this.state
        return (
            <Fragment>
                <div className="article-container">
                    <div className="extra-info">
                        <div className="title-editor">
                            <input type="text" placeholder="请输入标题" onChange={(e) => { this.getTitleContent(e) }} />
                        </div>
                        <div className="select-category">
                            <SelectMultiple />
                        </div>
                    </div>
                    <div className="article-edior">
                        <Editor title={title} articleId={this.props.match.params.id ? this.props.match.params.id : ''} />
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(Article)