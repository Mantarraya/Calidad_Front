import React from "react";
import { Route,Switch } from "react-router-dom";

import App from './components/App'
import Login from './components/login/login'

import HomeUser from "./components/home_user/home_user";
import Dashboard from "./components/dashboard/dashboard";
import Error404 from "./components/page/error404";


const AppRoutes = ()=>
    <App>
        <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/home_user" component={HomeUser}></Route>
            <Route component={Error404}></Route>
        </Switch>
    </App>;

export default AppRoutes