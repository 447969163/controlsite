import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import './index.css'
class NavTag extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    goBackToUrl(path,i){
        this.props.history.push(path)
    }
    render() {
        // 路由映射到菜单
        const urlMapMenu = []
        urlMapMenu['/home'] = '首页'
        urlMapMenu['/admanagement'] = '广告管理'
        urlMapMenu['/contentmanagement'] = '内容管理'
        urlMapMenu['/userList'] = '用户列表'
        urlMapMenu['/wxmanagement'] = '小程序设置'
        return (
            <Fragment>
                <div className="nav-tag-container">
                    {this.props.currentUrlList&&this.props.currentUrlList.map((item,i)=>{
                        return <span key={i} onClick={()=>{this.goBackToUrl(item,i)}}>{urlMapMenu[item]}</span>
                    })}
                </div>
            </Fragment>
        )
    }
}
export default withRouter(NavTag)