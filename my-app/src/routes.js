import React from "react";
import { Route,Switch } from "react-router-dom";

import App from './components/App'
import Login from './components/login/login'



const AppRoutes = ()=>
    <App>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route component={Login}></Route>
        </Switch>
    </App>;

export default AppRoutes