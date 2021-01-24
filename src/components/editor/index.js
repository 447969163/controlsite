import React, { Component, Fragment } from 'react';
import { Editor, EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import axios from 'axios';
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
// 图片组件
const Image = (props) => {
    if (!props.block.getEntityAt(0)) return null;
    const entity = props.contentState.getEntity(props.block.getEntityAt(0));
    const { src } = entity.getData();
    const type = entity.getType();
    // return一个图片块到编辑器中
    if (type === "image") {
        return <img src={src} alt="img" />
    }
}
// 编辑器组件
export default class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.input = null;
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
    }
    // 切换行内样式
    toggleInlineStyle(e, inlineStyle) {
        e.preventDefault();
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }
    // 保存按钮
    async save(contentState) {
        this.props.articleId ? console.log('修改') : console.log('新增')
        // 标题
        let articleTitle = this.props.titleContent
        console.log(articleTitle, '标题')
        // 编辑器中内容转为html片段
        let contentToHtml = stateToHTML(contentState)
        console.log(contentToHtml, 'html内容')
        let categoryContent = this.props.categoryContent
        console.log(categoryContent, '分类')
        await axios.post('http://127.0.0.1:8050/api_v1/insertarticle',`content=${contentToHtml}`).then(res=>{
            console.log(res,'res')
        })
    }

    /*
     * 插入图片相关
     */
    // 调起input[type='input']
    insertImg() {
        // 触发上传
        this.input.click();
    }
    // 图片变化时解析图片为base64格式 并渲染到编辑器中
    handleInputChange() {
        const files = this.input.files || []
        // console.log(files,'files')
        const file = files[0]
        // console.log(file,'file')
        const reader = new FileReader()
        // 如果有上传图片，则转为base64格式，不然没有file时会报错
        if (file) {
            // 转为base64格式
            reader.readAsDataURL(file)
        }
        reader.onload = (e) => {
            // 获取图片对象
            const src = e.target.result
            // 将base64格式的图片后渲染到editor中
            this.editorGetImg(src)
        }
    }
    // 渲染图片到编辑器中
    editorGetImg(src) {
        // 拿到base64格式的图片之后
        const editorState = this.state.editorState;
        const contentState = editorState.getCurrentContent();
        // 创建新的实体（带有图片）
        const contentStateWithEntity = contentState.createEntity(
            'image',
            'IMMUTABLE',
            { src }
        );
        // 获取新创建实体的key
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        // 将新的实体塞到编辑器新建的块中
        const newEditorState = EditorState.set(
            editorState,
            { currentContent: contentStateWithEntity },
            'create-entity'
        );
        // 渲染这个块到编辑器
        this.setState({
            editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')
        });
    }
    // 挂载图片到编辑器上
    mediaBlockRenderer(block) {
        // 拿到key并传递给Image组件
        const blockKey = block.getKey();
        if (block.getType() === 'atomic') {
            return {
                component: Image,
                editable: false,
                props: {
                    blockKey: blockKey
                }
            };
        }
    };
    render() {
        const { editorState } = this.state;
        const contentState = editorState.getCurrentContent();
        return (
            <Fragment>
                {/* 切换按钮 */}
                <div className="editor-control">
                    <div className="inline-style-control">
                        {styleDefinedMap.map(item =>
                            <span key={item.label} onClick={($event) => { this.toggleInlineStyle($event, item.style) }}>
                                {item.label}
                            </span>
                        )}
                        <span onClick={() => { this.insertImg() }}>img</span>
                        <input
                            ref={e => this.input = e}
                            type="file"
                            accept="image/*"
                            multiple={true}
                            onChange={() => { this.handleInputChange() }}
                        />
                    </div>
                </div>
                {/* 编辑器 */}
                <div className="editor-content">
                    <Editor
                        customStyleMap={styleMap}
                        editorState={editorState}
                        onChange={this.onChange}
                        blockRendererFn={(block) => this.mediaBlockRenderer(block)}
                    />
                </div>
                <div className="save-btn">
                    <button onClick={() => { this.save(contentState) }}>保存</button>
                </div>
            </Fragment>
        );
    }
}
