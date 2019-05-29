import React from "react";
import './info_usuario.css';
import logo from './estudiante.svg';

import MainHome from "./main_home/main_home";
import Cursos from "./cursos/cursos"

class InfoUsuario extends React.Component{

    constructor(props){
        super(props)

        this.state={
            valor:0
        }

        this.cargarMainHome = this.cargarMainHome.bind(this)
        this.cargarCursos = this.cargarCursos.bind(this)
    }

    cargarMainHome(e){
        e.preventDefault();
        this.setState({
            valor:0
        })
        e.preventDefault();
    }
    cargarCursos(e){
        e.preventDefault();
        this.setState({
            valor:1
        })
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <div className="mini_perfil">
                    <div className="contenido_superio">
                        <ul className="lista2">
                            <li className="item2">
                                <img src={logo} alt="" className="imagen"/>
                            </li>
                            <li className="item2">
                                <p><b>Alexander Watson</b></p>
                                <p>Studiante</p>
                            </li>
                            <li className="item2 boton_editar">
                                Editar Datos
                            </li>
                        </ul>
                    </div>
                    
                    <div className="menu_navegacion">
                        <ul className="lista3">
                            <li className="item3 itemDash" onClick={this.cargarMainHome}>Home</li>
                            <li className="item3" onClick={this.cargarCursos}>Cursos</li>
                            <li className="item3 perfil_derecha">Perfil</li>
                        </ul>
                    </div>
                </div>
                
                {this.state.valor===0?<MainHome/>:<Cursos/>}
            </div>
            
        );
    }
}

export default InfoUsuario;