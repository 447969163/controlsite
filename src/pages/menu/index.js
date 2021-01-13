import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./index.css";
class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuList: [
                { id: "0", name: "首页", path: "/home" },
                { id: "1", name: "内容管理", path: "/contentmanagement" },
                { id: "2", name: "广告设置", path: "/admanagement" },
                { id: "3", name: "用户列表", path: "/userList" },
                { id: "4", name: "小程序设置", path: "/wxmanagement" }
            ],
            selectedIndex: this.props.selectedIndex
        }
    }
    // 跳转路由
    linkTo(item) {
        this.props.history.push(item.path)
    }
    render() {
        const { menuList, selectedIndex } = this.state
        return (
            <Fragment>
                <div className="menu-container">
                    {menuList.map((item, i) => {
                        return <span key={i} onClick={() => { this.linkTo(item) }} className={i == selectedIndex ? 'selected' : ''}>{item.name}</span>
                    })}
                </div>
            </Fragment>
        )
    }
}
export default withRouter(Menu)