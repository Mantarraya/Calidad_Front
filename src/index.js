import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

render(
    <BrowserRouter>
        <AppRoutes>
        </AppRoutes>
    </BrowserRouter>
    , document.getElementById('root'));
