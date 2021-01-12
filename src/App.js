import React from "react";
import './App.css';
import Routes from './router/index'
export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="app">
        <Routes/>
      </div>
    );
  }
}
