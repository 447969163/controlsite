import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import "draft-js/dist/Draft.css";
import styles from './index.css'
// 定义按钮内容及绑定的style模块
const styleDefinedMap = [
    { label: 'Monospace', style: 'code' },
];
// style模块配置
const styleMap = {
    code: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};
// 按钮控件组件
class InlineStyleControls extends Component {
    constructor(props) {
        super(props)
    }
    // 样式切换处理函数
    onToggle(e,style) {
        e.preventDefault();
        this.props.onToggle(style);
    };
    render() {
        return (
            <div className={styles["RichEditor-controls"]}>
                {styleDefinedMap.map(item =>
                    <span key={item.label} onClick={($event)=>{this.onToggle($event,item.style)}}>
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
    render() {
        const { editorState } = this.state;
        return (
            <div>
                <InlineStyleControls
                    editorState={editorState}
                    onToggle={this.toggleInlineStyle}
                />
                <div>
                    <Editor
                        customStyleMap={styleMap}
                        editorState={editorState}
                        onChange={this.onChange}
                        spellCheck={true}
                    />
                </div>
            </div>
        );
    }
}
