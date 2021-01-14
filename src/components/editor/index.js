import React, { Component, Fragment,convertToRaw } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import Axios from '../../request'
import "draft-js/dist/Draft.css";
import './index.css'
// 定义按钮内容及绑定的style模块
const styleDefinedMap = [
    { label: 'Bold', style: 'bold' },
    { label: 'Code', style: 'code' },
    { label: 'H1', style: 'hOne' },
];
// style模块配置
const styleMap = {
    code: {
        backgroundColor: 'rgb(10 9 9 / 10%)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: '0.8rem',
        padding: '0.2rem 0.4rem',
        borderRadius: '0.1rem'
    },
    bold: {
        fontWeight: 'bold'
    },
    hOne: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
};
// 按钮控件组件
class InlineStyleControls extends Component {
    constructor(props) {
        super(props)
    }
    // 样式切换处理函数
    onToggle(e, style) {
        e.preventDefault();
        this.props.onToggle(style);
    }
    render() {
        return (
            <div className="inline-style-control">
                {styleDefinedMap.map(item =>
                    <span key={item.label} onClick={($event) => { this.onToggle($event, item.style) }}>
                        {item.label}
                    </span>
                )}
            </div>
        );
    }

};
// 组合组件
export default class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    }
    // 切换行内样式
    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }
    save(contentState) {
        // 标题
        let articleTitle = this.props.title
        // console.log(articleTitle)
        // 编辑器中内容转为html片段
        let contentToHtml = stateToHTML(contentState)
        // console.log(contentToHtml)

    }
    render() {
        const { editorState } = this.state;
        const contentState = editorState.getCurrentContent();
        return (
            <Fragment>
                <div className="editor-control">
                    <InlineStyleControls
                        editorState={editorState}
                        onToggle={this.toggleInlineStyle}
                    />
                </div>
                <div className="editor-content">
                    <Editor
                        customStyleMap={styleMap}
                        editorState={editorState}
                        onChange={this.onChange}
                        spellCheck={true}
                    />
                </div>
                <div className="save-btn">
                    <button onClick={()=>{this.save(contentState)}}>保存</button>
                </div>
            </Fragment>
        );
    }
}
