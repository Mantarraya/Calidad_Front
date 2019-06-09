import React,{ Component } from "react";

import { withRouter } from "react-router-dom";

import NavBarUser from "./navbar_user/navbar_user";
import InfoUsuario from "./info_usuario/info_usuario";
import Footer from "../footer/footer"

import './home_teacher.css'

class HomeTeacher extends Component{
    
    constructor(props){
        super(props) 
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

export default withRouter(HomeTeacher);