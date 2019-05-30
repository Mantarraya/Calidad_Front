import React,{ Component } from "react";

import NavBarUser from "./navbar_user/navbar_user";
import InfoUsuario from "./info_usuario/info_usuario";
import Footer from "../footer/footer"

import './home_user.css'

class HomeUser extends Component{
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

export default HomeUser;