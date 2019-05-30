import React from "react";

import './principal_user.css'

export default class PrincipalUser extends React.Component{
    render(){
        return(
            <div className="container info_usuario--principal_user">
                <div className="row">
                    <div className="col-6 info_usuario--principal_user_canvas">
                        <div class="info_usuario--principal_user_grafica1"></div>
                    </div>
                    <div className="col-6">
                        <div class="info_usuario--principal_user_grafica2"></div>
                        <div class="info_usuario--principal_user_grafica3"></div>
                    </div>
                </div>
            </div>
        );
    }
}