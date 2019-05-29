import React from "react";
import { Link } from "react-router-dom";
import './navbar_user.css';

class NavBarUser extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <ul className="nav_lista">
                        <Link className="item logo" to="/home_user">TechFazt</Link>
                        <li className="item cursos" id="curso">Cursos</li>
                        <li className="item">
                            <input type="text" className="buscador" placeholder="Que quieres aprender?"/>
                        </li>
                        <div className="derecha">
                            <Link className="item cerrar_sesion" to="/login">Cerrar Sesion</Link>
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBarUser;