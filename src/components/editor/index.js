import 'draft-js/dist/Draft.css';
import './index.css';
import React, { Component, Fragment } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

export default class EditorComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // 初始化状态
            editorState: EditorState.createEmpty()
        }
    }
    changeEidtor(editorState) {
        this.setState({ editorState })
    }
    toggleBlockType(blockType) {
        this.changeEidtor(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }
    render() {
        const { editorState } = this.state
        const editorStyleMap = {
            //字体
            Bold:{
                fontWeight: '600',
            },
            Italic:{
                fontStyle: 'italic',
            },
        };
        return (
            <Fragment>
                <div className="editor-control">
                    <span onClick={() => { this.toggleBlockType('header-one') }}>H1</span>
                    <span onClick={()=>{this.toggleBlockType('Bold')}}>B</span>
                </div>
                <div className="editor-content">
                    <Editor onChange={(editorState) => { this.changeEidtor(editorState) }} editorState={editorState} customStyleMap = {editorStyleMap}/>
                </div>
            </Fragment>
        )
    }
}