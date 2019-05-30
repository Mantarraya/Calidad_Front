import React from "react";
import './info_usuario.css';
import logo from './estudiante.svg';


class InfoUsuario extends React.Component{

    constructor(props){
        super(props)

        this.state={
            valor:0
        }

        this.cargarMainHome = this.cargarMainHome.bind(this)
        this.cargarCursos = this.cargarCursos.bind(this)
        this.cargarEditarDatosUser=this.cargarEditarDatosUser.bind(this)
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

    cargarEditarDatosUser(e){
        e.preventDefault();
        this.setState({
            valor:2
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
                            <div className="info_usuario--header_btn_editar" onClick={this.cargarEditarDatosUser}>
                                    Editar Datos
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <ul className="info_usuario--header_enlaces">
                        <li>Principal</li>
                        <li>Cursos</li>
                    </ul>
                </div>


                <div className="container info_usuario--main">
                    <div className="row">
                        <div className="col-6 info_usuario--canvas1">
                            <div id="grafica1"></div>
                        </div>
                        <div className="col-6">
                            <div id="grafica2"></div>
                            <div id="grafica3"></div>
                        </div>
                    </div>
                </div>

                
            </div>
            
        );
    }
}

export default InfoUsuario;