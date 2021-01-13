import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./index.css";
import Menu from "../menu/index";
class ContentManagement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keywords: '',
            listHead: [
                { name: '序号' },
                { name: '文章标题' },
                { name: '文章描述' },
                { name: '所属分类' },
                { name: '创建时间' },
                { name: '操作' }
            ],
            listData: [
                { id: 0, title: '比阿萨德健康撒开', desc: 'sasas', category: 'sasasdas', createTime: 'asdasdas' },
                { id: 1, title: '撒娇的叫的撒的撒v打算打算吖', desc: 'asasa', category: '', createTime: '' },
                { id: 2, title: '做一颗贪得无厌的书', desc: 'sasas', category: 'assas', createTime: '' },
                { id: 3, title: '第三等级考核翠海ID叫啊世锦赛哦v家', desc: '', category: '', createTime: '' },
                { id: 4, title: '版本更新到不行啊数据扣篮大赛两节课版本更新到不行啊数据扣篮大赛两节课版本更新到不行啊数据扣篮大赛两节课版本更新到不行啊数据扣篮大赛两节课版本更新到不行啊数据扣篮大赛两节课版本更新到不行啊数据扣篮大赛两节课', desc: '', category: '', createTime: '' },
            ]
        }
    }
    search() {
        // console.log(this.state.keywords)
    }
    addArticle() {
        this.props.history.push('/artile')
     }
    edit(){}
    delete(){}
    render() {
        const { listHead, listData } = this.state
        return (
            <Fragment>
                <div className="content-management-container">
                    <Menu selectedIndex="1" />
                    <div className="content-management-content">
                        <div className="control-region">
                            <div className="search">
                                <input type="text" placeholder="输入文章名搜索" onChange={(e) => { this.setState({ keywords: e.target.value }) }} />
                                <button onClick={() => { this.search() }}>搜索</button>
                            </div>
                            <button onClick={() => { this.addArticle() }}>新增</button>
                        </div>
                        <div className="article-list">
                            <div className="article-table">
                                <table>
                                    <thead>
                                        <tr>
                                            {listHead.map((item, i) => {
                                                return <td key={i} style={{ flex: 1 }}>{item.name}</td>
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listData.map((item, i) => {
                                            return <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td title={item.title}>{item.title}</td>
                                                <td title={item.desc}>{item.desc}</td>
                                                <td title={item.category}>{item.category}</td>
                                                <td title={item.createTime}>{item.createTime}</td>
                                                <td>
                                                    <span onClick={()=>{this.edit(item.id)}}>修改</span>
                                                    <span onClick={()=>{this.delete(item.id)}}>删除</span>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(ContentManagement)