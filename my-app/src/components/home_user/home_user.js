import React,{ Component } from "react";

import { withRouter } from "react-router-dom";

import NavBarUser from "./navbar_user/navbar_user";
import InfoUsuario from "./info_usuario/info_usuario";
import Footer from "../footer/footer"

import AuthEstudiante from '../restricciones/auth_estudiante'
import './home_user.css'

class HomeUser extends Component{
    
    constructor(props){
        super(props)
        var p=new AuthEstudiante()
        if(p.verificarEstudiante()){
            this.props.history.push('/login');
        }
    }
    
    render(){

        
        return(
            <div>
                <NavBarUser/>
                <InfoUsuario/>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(HomeUser);