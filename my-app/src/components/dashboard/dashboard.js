import React,{ Component } from "react";
import { withRouter } from "react-router-dom";

import NavBar from "../navbar/navbar";
import './dashboard.css';

import AuthEstudiante from '../restricciones/auth_estudiante'

class Dashboard extends Component{

    constructor(props){
        super(props)

        var p=new AuthEstudiante()
        if(!p.verificarEstudiante()){
            this.props.history.push('/home_user');
        }
    }

    render(){
        return(
            <div>
                <NavBar/>
                <div className="dashboard--principal--contenedor_home">
                    <div className="dashboard--principal--parallax1">
                        <div className="dashboard--principal--contenido_portada">
                            <p className="dashboard--principal--frase">Enseñanza de calidad</p>
                            <p className="dashboard--principal--descripcion">
                            Tutores con amplia experiencia y especializados en los cursos que dictan.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard--principal--contenido">
                        <div className="dashboard--principal--servicio">
                            <div className="dashboard--principal--cua1">
                                <p>Area de <br/> Practicas</p>
                            </div>
                            <div className="dashboard--principal--cua2">
                                <ul>
                                    <li>
                                        <b>Apoyo escolar</b>
                                        <p>Clases de nivelación, acompañamiento en tareas y preparación para exámenes.</p>
                                    </li>
                                    <li>
                                        <b>Preuniversitario</b>
                                        <p> Clases personalizadas o en grupos pequeños nivel PRE.</p>
                                    </li>
                                    <li>
                                        <b>Taller de inteligencias múltiples</b>
                                        <p>Paquete de cursos variados por 1 solo precio.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="dashboard--principal--cua3">
                                <ul>
                                    <li>
                                        <b>Orientación vocacional (en local)</b>
                                        <p>Asesoría vocacional por medio de un examen físico de diagnóstico y coaching</p>
                                    </li>
                                    <li>
                                        <b>Tutor WhatsApp</b>
                                        <p>La asesoría solo es por WhatsApp.</p>
                                    </li>
                                    <li>
                                        <b>Orientación vocacional (digital)</b>
                                        <p> Asesoría vocacional por medio de un examen digital de diagnóstico y coaching, con reuniones con expertos por videollamada.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="dashboard--principal--vision">
                                <p className="dashboard--principal--titulo_vision"> <b>A la vuelta de la </b> esquina</p>
                                Contacta a los mejores tutores que están dispuestos a enseñarte y cercanos a tu hogar.
                        </div>
                    </div>
                    
                    <div className="dashboard--principal--parallax2"></div>


                    <p className="dashboard--principal--titulo_creadores">
                            <b>NUESTROS</b> REPRESENTANTES
                        </p>
                    <div className="dashboard--principal--creadores">
                        <div className="dashboard--principal--persona"></div>
                        
                        <div className="dashboard--principal--persona1"></div>
                        <div className="dashboard--principal--persona2"></div>
                        <div className="dashboard--principal--persona3"></div>
                        <div className="dashboard--principal--persona"></div>
                    </div>
            </div>
            </div>
        );
    }
}

export default withRouter(Dashboard);