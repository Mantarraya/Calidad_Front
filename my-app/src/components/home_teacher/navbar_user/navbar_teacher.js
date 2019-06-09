import React from "react";
import { Link } from "react-router-dom";
import './navbar_user.css';
import ModalUser from "./modal_user/modal_user";

class NavBarUser extends React.Component{

    constructor(props){
        super(props)

        this.btnCerrarSesion=this.btnCerrarSesion.bind(this)
    }

    btnCerrarSesion(e){
        localStorage.removeItem('mytoken');
    }

    componentDidMount(){
        var modal = document.getElementById("navbar_user--modal");
        var btn = document.getElementById("navbar_user--curso");

        btn.onclick = function(){ 
            modal.style.display="block";
        }
        window.onclick = function(event){
            if(event.target === modal){
                modal.style.display="none";
            }
        }
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <Link className="navbar-brand" to="/home_user">TechFazt</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <div className="nav-link" id="navbar_user--curso">Cursos<span className="sr-only">(current)</span></div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" onClick={this.btnCerrarSesion}>Cerrar Sesion</Link>
                    </li>
                    </ul>
                </div>


                <div id="navbar_user--modal">
                    <div id="navbar_user--contenido_modal">
                        <ModalUser/>
                    </div>
                </div>
                

            </nav>
        );
    }
}

export default NavBarUser;