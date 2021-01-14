import React, { Component, Fragment } from "react";
import './App.css';
import Routes from './router/index'
import Menu from './components/menu'
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="app">
        <Fragment>
          <div className="menu-component">
            <Menu />
          </div>
          <div className="route-component">
            <Routes />
          </div>
        </Fragment>
      </div>
    );
  }
}
