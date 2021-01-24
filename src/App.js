import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import './App.css';
import RouteView from './router/index'
import Menu from './components/menu'
import TagNav from "./components/navtag";
import Login from "./pages/login";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUrlList: ['/home']
    }
  }
  // 浏览器刷新后重定向到首页
  componentWillMount() {
    localStorage.setItem('token','1')
     this.props.history.push('/')
  }
  // 获取menu组件切换路由
  getCurrentUrl(currentUrl) {
    if (this.state.currentUrlList.indexOf(currentUrl) === -1) {
      this.state.currentUrlList.push(currentUrl)
    }
    this.setState({
      currentUrlList: this.state.currentUrlList
    })
  }
  render() {
    const { currentUrlList } = this.state
    return (
      <div className="app">
        {localStorage.getItem('token')
          ? 
          <Fragment>
            <div className="left-menu">
              <Menu getCurrentUrl={this.getCurrentUrl.bind(this)} />
            </div>
            <div className="right-content">
              <div className="top-tag">
                <TagNav currentUrlList={currentUrlList} />
              </div>
              <div className="bottom-route-view">
                <RouteView />
              </div>
            </div>
          </Fragment>
          :
          <Fragment>
            <Login />
          </Fragment>
        }
      </div>
    );
  }
}
export default withRouter(App)