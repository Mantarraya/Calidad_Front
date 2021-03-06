import React from "react";
import './info_usuario.css';
import logo from './estudiante.svg';

import PrincipalUser from "./principal_user/principal_user";
import Perfil from './perfil_user/perfil_user';
import Cursos from './cursos/cursos';
import EditarDatosUser from './editar_datos_user/editar_datos_user';
import Mensajes from './mensajes_chat/mensajes';

class InfoUsuario extends React.Component{

    constructor(props){
        super(props)

        this.state={
            valor:0,
            nombres:'',
            apellidos:'',
            username:'',
            email:''
        }


        this.cargarPrincipal = this.cargarPrincipal.bind(this)
        this.cargarCursos = this.cargarCursos.bind(this)
        this.cargarPerfil=this.cargarPerfil.bind(this)
        this.editarDatosUsuario=this.editarDatosUsuario.bind(this)
        this.mensajesChat=this.mensajesChat.bind(this)
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
            case 4:{
                return <Mensajes/>;
            }
            default:{
                return <h1>Error</h1>
            }
            
        }
    }

    componentDidMount () {


        var parent = this; 


        const enlace_principal = document.getElementById("info_usuario--header_enlaces_principal");
        const enlace_perfil = document.getElementById("info_usuario--header_enlaces_perfil");
        const enlace_cursos = document.getElementById("info_usuario--header_enlaces_cursos");
        const enlace_mensajes = document.getElementById("info_usuario--header_enlaces_mensajes");

        enlace_principal.onclick=()=>{
            enlace_principal.style.borderBottom="3px solid white";
            enlace_perfil.style.borderBottom="3px solid transparent";
            enlace_cursos.style.borderBottom="3px solid transparent";
            enlace_mensajes.style.borderBottom="3px solid transparent";
        }
        enlace_perfil.onclick=()=>{
            enlace_principal.style.borderBottom="3px solid transparent";
            enlace_perfil.style.borderBottom="3px solid white";
            enlace_cursos.style.borderBottom="3px solid transparent";
            enlace_mensajes.style.borderBottom="3px solid transparent";
        }
        enlace_cursos.onclick=()=>{
            enlace_principal.style.borderBottom="3px solid transparent";
            enlace_perfil.style.borderBottom="3px solid transparent";
            enlace_cursos.style.borderBottom="3px solid white";
            enlace_mensajes.style.borderBottom="3px solid transparent";
        }

        enlace_mensajes.onclick=()=>{
            enlace_principal.style.borderBottom="3px solid transparent";
            enlace_perfil.style.borderBottom="3px solid transparent";
            enlace_cursos.style.borderBottom="3px solid transparent";
            enlace_mensajes.style.borderBottom="3px solid white";
        }

        fetch("https://api-calida.herokuapp.com/api/alumno/"+localStorage.getItem('mytoken'))
        .then(function (response){ 
            return response.json();
        })
        .then(function (data){
            console.log(data)
            parent.setState({
                username:data.username,
                email:data.email
            })


            localStorage.setItem("id_user",data._id)
            localStorage.setItem("nombres",data.firstname)
            localStorage.setItem("apellidos",data.lastname)
            localStorage.setItem("username",data.username)
            localStorage.setItem("email",data.email)

            
        }).catch(function (err){
            console.log(err)
        })
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

    mensajesChat(e){
        e.preventDefault();
        this.setState({
            valor:4
        })
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <div className="container-fluid bg-primary info_usuario--header">
                    <div className="row">
                        <div className="col-2">
                            <img src={logo} alt="" className=""/>
                        </div>
                        <div className="col-4">
                            <div className="info_usuario--header_info_user">
                                <b>{this.state.username}</b>
                                <p>{this.state.email}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="info_usuario--header_btn_editar" onClick={this.editarDatosUsuario}>
                                    Editar datos
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <ul className="info_usuario--header_enlaces">
                        <li id="info_usuario--header_enlaces_principal" onClick={this.cargarPrincipal}>Principal</li>
                        <li id="info_usuario--header_enlaces_perfil" onClick={this.cargarPerfil}>Perfil</li>
                        <li id="info_usuario--header_enlaces_cursos" onClick={this.cargarCursos}>Cursos</li>
                        <li id="info_usuario--header_enlaces_mensajes" onClick={this.mensajesChat}>Mensajes</li>
                    </ul>
                </div>

                <this.CompHome numOpcion={this.state.valor}/>                
                
            </div>
            
        );
    }
}

export default InfoUsuario;