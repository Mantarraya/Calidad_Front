import React from "react";
import './navbar_admin.css'
import ReportarUsuario from "../reporter_user/reporter_user";
import Estadistica from "../statistic/statistic";
import Alumno from "../student/student";
import Profesor from "../teacher/teacher";

export default class NavbarAdmin extends React.Component {

    constructor(props){
        super(props)

        this.state={
            valor:0,
        }

        this.reporterUser = this.reporterUser.bind(this)
        this.estadistica = this.estadistica.bind(this)
        this.alumno = this.alumno.bind(this)
        this.profesor = this.profesor.bind(this)
    
    }

    CompHome(props){
        const numOpcion=props.numOpcion;
        switch (numOpcion){
            case 1:{
                return <Estadistica/>;
            }
            case 2:{
                return <Alumno/>;
            }
            case 3:{
                return <Profesor/>;
            }
            case 4:{
                return <ReportarUsuario/>;
            }
            default:{
                return <h1>Error</h1>
            }
            
        }
    }

    estadistica(e){
        e.preventDefault();
        this.setState({
            valor:1
        })
        e.preventDefault();
    }
    alumno(e){
        e.preventDefault();
        this.setState({
            valor:2
        })
        e.preventDefault();
    }
    profesor(e){
        e.preventDefault();
        this.setState({
            valor:3
        })
        e.preventDefault();
    }
    reporterUser(e){
        e.preventDefault();
        this.setState({
            valor:4
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className="navbar_admin--contenido">
                <div>

                <div className="col-md-2" id="navbar_admin--lista">

                    <div className="navbar_admin--navegacion">
                        <ul className="navbar_admin--menu">
                            <li><a href="#"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Inicio</span></a></li>
                            <li><a onClick = {this.estadistica}><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Estadísticas</span></a></li>
                            <li><a onClick = {this.alumno}><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Alumnos</span></a></li>
                            <li><a onClick = {this.profesor}><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Profesores</span></a></li>
                            <li><a onClick = {this.reporterUser}><i className="fa fa-calendar" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Usuarios reportados</span></a></li>
                        </ul>
                    </div>
                </div>

                
                <this.CompHome numOpcion={this.state.valor}/>  
                </div>
        
            </div>
        );
    }
}