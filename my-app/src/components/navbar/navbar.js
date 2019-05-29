import React from "react";
import { Link,withRouter } from "react-router-dom";

import './navbar.css'

class NavBar extends React.Component{


    constructor(props){
        super(props);
        this.iniciarSesion=this.iniciarSesion.bind(this);    
    }

    iniciarSesion(e){
        e.preventDefault();

        this.props.history.push('/home_user')
        e.preventDefault();
    }


    render(){
        return(
            <nav class="login--nav">
                <ul>
                    <Link className="navbar--principal" to="/">TechFazt</Link>
                    <li>Servicios</li>
                    <li>Acerca de</li>
                    <Link className="navbar--principal"  to="/login">Unete</Link>
                    <form>
                        <li class="login--derecha login--iniciar_sesion_email">
                            <input type="email" placeholder="Email"/>                    
                        </li>
                        <li class="login--derecha login--iniciar_sesion_pass">
                            <input type="password" placeholder="Contraseña" />
                        </li>
                        <li class="login--derecha login--iniciar_sesion_btn">
                            <button onClick={this.iniciarSesion}>Entrar</button>
                        </li>
                    </form>
                </ul>
            </nav>

        );
    }
}
export default withRouter(NavBar);