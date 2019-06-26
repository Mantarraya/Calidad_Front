import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
// using ES6 modules
import { BrowserRouter, Route, Link } from "react-router-dom";
 
// using CommonJS modules
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;
render(
    <BrowserRouter>
        <AppRoutes>
        </AppRoutes>
    </BrowserRouter>
    , document.getElementById('root'));
