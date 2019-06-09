import React from "react";
import { Route,Switch } from "react-router-dom";

import App from './components/App'
import Login from './components/login/login'

import HomeUser from "./components/home_user/home_user";
import Dashboard from "./components/dashboard/dashboard";
import Error404 from "./components/page/error404";
import CursoUser from "./components/home_user/curso_user/curso_user";

import HomeTeacher from "./components/home_teacher/home_teacher";
import HomeAdmin from "./components/home_admin/home_admin";


const AppRoutes = ()=>
    <App>
        <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/home_user" component={HomeUser}></Route>
            <Route exact path="/home_user/curso/:cursoId" component={CursoUser}></Route>
            <Route exact path="/home_teacher" component={HomeTeacher}></Route>
            <Route exact path="/home_admin" component={HomeAdmin}></Route>
            <Route component={Error404}></Route>
        </Switch>
    </App>;

export default AppRoutes