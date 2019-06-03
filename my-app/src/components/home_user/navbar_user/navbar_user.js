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
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <Link class="navbar-brand" to="/home_user">TechFazt</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" id="navbar_user--curso">Cursos<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/login" onClick={this.btnCerrarSesion}>Cerrar Sesion</Link>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
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