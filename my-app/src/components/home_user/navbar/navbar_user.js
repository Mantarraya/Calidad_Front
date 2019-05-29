import React from "react";
import { Link } from "react-router-dom";
import './navbar_user.css';

class NavBarUser extends React.Component{
    render(){
        return(
            <nav>
                <ul className="nav_lista">
                    <Link className="item logo" to="/">LOGO</Link>
                    <li className="item cursos" id="curso">Cursos</li>
                    <li className="item">
                        <input type="text" className="buscador" placeholder="Que quieres aprender?"/>
                    </li>
                    <div className="derecha">
                        <Link className="item cerrar_sesion" to="/login">Cerrar Sesion</Link>
                    </div>
                </ul>
            </nav>
        );
    }
}

export default NavBarUser;