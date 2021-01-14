import React, { Component, Fragment } from "react";
import './App.css';
import RouteView from './router/index'
import Menu from './components/menu'
import TagNav from "./components/navtag";
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="app">
        <Fragment>
          <div className="left-menu">
            <Menu/>
          </div>
          <div className="right-content">
            <div className="top-tag">
            <TagNav/>
            </div>
            <div className="bottom-route-view">
            <RouteView />
            </div>
          </div>
        </Fragment>
      </div>
    );
  }
}
