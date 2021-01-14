import React, { Component, Fragment } from "react";
import "./index.css";
// import Menu from "../menu/index";
export default class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listHead: [
                { name: "序号" },
                { name: "用户头像" },
                { name: "用户昵称" },
                { name: "用户openid" },
                { name: "注册时间" }
            ],
            listData: [
                { id: 0, avator: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3496134044,3873901801&fm=26&gp=0.jpg', nick: '冯旭宇', openId: 33224234372989798, signTime: "2020-12-09" },
                { id: 1, avator: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3496134044,3873901801&fm=26&gp=0.jpg', nick: '最后', openId: 78434347383728, signTime: "2020-12-09" },
                { id: 2, avator: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3496134044,3873901801&fm=26&gp=0.jpg', nick: '迷失的森林积极快乐的计算机房的生力军', openId: 33224234372989798, signTime: "2020-12-09" },
                { id: 3, avator: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3496134044,3873901801&fm=26&gp=0.jpg', nick: '风雨同舟', openId: 33224234372989798, signTime: "2020-12-09" },
            ]
        }
    }

    render() {
        const { listHead, listData } = this.state
        return (
            <Fragment>
                <div className="user-list-container">
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
                                    <td><img src={item.avator} /></td>
                                    <td title={item.nick}>{item.nick}</td>
                                    <td title={item.openId}>{item.openId}</td>
                                    <td title={item.signTime}>{item.signTime}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }
}