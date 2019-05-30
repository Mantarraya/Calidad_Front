import React from "react";
import './info_usuario.css';
import logo from './estudiante.svg';

import PrincipalUser from "./principal_user/principal_user";
import Perfil from './perfil_user/perfil_user';
import Cursos from './cursos/cursos'
import EditarDatosUser from './editar_datos_user/editar_datos_user'

class InfoUsuario extends React.Component{

    constructor(props){
        super(props)

        this.state={
            valor:0
        }


        this.cargarPrincipal = this.cargarPrincipal.bind(this)
        this.cargarCursos = this.cargarCursos.bind(this)
        this.cargarPerfil=this.cargarPerfil.bind(this)
        this.editarDatosUsuario=this.editarDatosUsuario.bind(this)
    }

    CompHome(props){
        const numOpcion=props.numOpcion;
        switch (numOpcion){
            case 0:{
                return <PrincipalUser/>;
            }
            case 1:{
                return <Perfil/>
            }
            case 2:{
                return <Cursos/>;
            }
            case 3:{
                return <EditarDatosUser/>;
            }
            default:{
                return <h1>Error</h1>
            }
            
        }
    }

    componentDidMount () {
        const enlace_principal = document.getElementById("info_usuario--header_enlaces_principal");
        const enlace_perfil = document.getElementById("info_usuario--header_enlaces_perfil");
        const enlace_cursos = document.getElementById("info_usuario--header_enlaces_cursos");

        enlace_principal.onclick=()=>{
            enlace_principal.style.borderBottom="3px solid white";
            enlace_perfil.style.borderBottom="3px solid transparent";
            enlace_cursos.style.borderBottom="3px solid transparent";
        }
        enlace_perfil.onclick=()=>{
            enlace_principal.style.borderBottom="3px solid transparent";
            enlace_perfil.style.borderBottom="3px solid white";
            enlace_cursos.style.borderBottom="3px solid transparent";
        }
        enlace_cursos.onclick=()=>{
            enlace_principal.style.borderBottom="3px solid transparent";
            enlace_perfil.style.borderBottom="3px solid transparent";
            enlace_cursos.style.borderBottom="3px solid white";
        }
    }


    cargarPrincipal(e){
        e.preventDefault();
        this.setState({
            valor:0
        })
        e.preventDefault();
    }

    cargarPerfil(e){
        e.preventDefault();
        this.setState({
            valor:1
        })
        e.preventDefault();
    }
    
    cargarCursos(e){
        e.preventDefault();
        this.setState({
            valor:2
        })
        e.preventDefault();
    }

    editarDatosUsuario(e){
        e.preventDefault();
        this.setState({
            valor:3
        })
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <div class="container-fluid bg-primary info_usuario--header">
                    <div className="row">
                        <div className="col-2">
                            <img src={logo} alt="" className=""/>
                        </div>
                        <div className="col-4">
                            <div className="info_usuario--header_info_user">
                                <b>Luis Huayta</b>
                                <p>Estudiante</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div className="info_usuario--header_btn_editar" onClick={this.editarDatosUsuario}>
                                    Editar Datos
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <ul className="info_usuario--header_enlaces">
                        <li id="info_usuario--header_enlaces_principal" onClick={this.cargarPrincipal}>Principal</li>
                        <li id="info_usuario--header_enlaces_perfil" onClick={this.cargarPerfil}>Perfil</li>
                        <li id="info_usuario--header_enlaces_cursos" onClick={this.cargarCursos}>Cursos</li>
                    </ul>
                </div>

                <this.CompHome numOpcion={this.state.valor}/>                
                
            </div>
            
        );
    }
}

export default InfoUsuario;