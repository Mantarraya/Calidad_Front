import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { BrowserRouter as Router, Route } from 'react-router-dom';

render(
    <BrowserRouter>
        <AppRoutes>
        </AppRoutes>
    </BrowserRouter>
    , document.getElementById('root'));
