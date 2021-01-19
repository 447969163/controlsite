import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "../pages/home";
import ContentManagement from "../pages/contentmanagement";
import AdManagement from "../pages/admanagement";
import UserList from "../pages/userList";
import WxManagement from "../pages/wxmanagement";
import Article from "../pages/artitle";
import Login from "../pages/login";
export default class RouteView extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Switch>
                {/* <Route path="/login" component={Login}></Route> */}
                <Route path="/home" component={Home}></Route>
                <Route path="/admanagement" component={AdManagement}></Route>
                <Route path="/contentmanagement" component={ContentManagement}></Route>
                <Route path="/artile/:id" component={Article}></Route>
                <Route path="/artile" component={Article}></Route>
                <Route path="/userList" component={UserList}></Route>
                <Route path="/wxmanagement" component={WxManagement}></Route>
                <Redirect from="/" to="/home"></Redirect>
            </Switch>


        )
    }
}