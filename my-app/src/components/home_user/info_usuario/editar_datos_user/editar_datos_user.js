import React from "react";

import './editar_datos_user.css'

import InformacionBasicaUser from "./informacion_basica_user/informacion_basica_user";
import CambiarContraseniaUser from "./cambiar_contrasenia_user/cambiar_contrasenia_user";

export default class EditarDatosUser extends React.Component{


    constructor(props){
        super(props)
        this.state={
            valor:0
        }

        this.metodoInformacionBasica=this.metodoInformacionBasica.bind(this)
        this.metodoPerfilPrivacidad=this.metodoPerfilPrivacidad.bind(this)
        this.metodoNotificaciones=this.metodoNotificaciones.bind(this)
        this.metodoCambiarContrasenia=this.metodoCambiarContrasenia.bind(this)
    }

    CompFormularios(props){
        const numOption =props.numOption
        switch(numOption){
            case 0:{
                return <InformacionBasicaUser/>
            }
            case 1:{
                return <h1>perfil</h1>
            }
            case 2:{
                return <h1>Notificaciones</h1>
            }
            default:{
                return <CambiarContraseniaUser/>
            }
        }   
    }

    
    componentDidMount(){
        const steppers1=document.getElementById("info_usuario--editar_steppers1")
        const steppers2=document.getElementById("info_usuario--editar_steppers2")
        const steppers3=document.getElementById("info_usuario--editar_steppers3")
        const steppers4=document.getElementById("info_usuario--editar_steppers4")

        steppers1.onclick=()=>{
            steppers1.classList.add("info_usuario--editar_step-active");
            steppers2.classList.remove("info_usuario--editar_step-active");
            steppers3.classList.remove("info_usuario--editar_step-active");
            steppers4.classList.remove("info_usuario--editar_step-active");
        }
        steppers2.onclick=()=>{
            steppers1.classList.remove("info_usuario--editar_step-active");
            steppers2.classList.add("info_usuario--editar_step-active");
            steppers3.classList.remove("info_usuario--editar_step-active");
            steppers4.classList.remove("info_usuario--editar_step-active");
        }
        steppers3.onclick=()=>{
            steppers1.classList.remove("info_usuario--editar_step-active");
            steppers2.classList.remove("info_usuario--editar_step-active");
            steppers3.classList.add("info_usuario--editar_step-active");
            steppers4.classList.remove("info_usuario--editar_step-active");
        }
        steppers4.onclick=()=>{
            steppers1.classList.remove("info_usuario--editar_step-active");
            steppers2.classList.remove("info_usuario--editar_step-active");
            steppers3.classList.remove("info_usuario--editar_step-active");
            steppers4.classList.add("info_usuario--editar_step-active");
        }
    }


    metodoInformacionBasica(e){
        this.setState({
            valor:0
        })
        e.preventDefault();
    }
    metodoPerfilPrivacidad(e){
        this.setState({
            valor:1
        })
        e.preventDefault();
    }
    metodoNotificaciones(e){
        this.setState({
            valor:2
        })
        e.preventDefault();
    }
    metodoCambiarContrasenia(e){
        this.setState({
            valor:3
        })
        e.preventDefault();
    }

    render(){
        return(
            <div className="container info_usuario--editar_datos_user">
                <div className="row">
                    <div className="col-8">
                        <this.CompFormularios numOption={this.state.valor}/>
                    </div>
                    <div className="col-4 info_usuario--editar_step_main">
                        <div class="info_usuario--editar_step info_usuario--editar_step-active"  id="info_usuario--editar_steppers1" onClick={this.metodoInformacionBasica}>
                            <div>
                                <div class="info_usuario--editar_circle">1</div>
                            </div>
                            <div>
                                <div class="info_usuario--editar_title">Informacion Basica</div>
                            </div>
                        </div>
                        <div class="info_usuario--editar_step" id="info_usuario--editar_steppers2" onClick={this.metodoPerfilPrivacidad}>
                            <div>
                                <div class="info_usuario--editar_circle">2</div>
                            </div>
                            <div>
                                <div class="info_usuario--editar_title">Perfil - Privacidad</div>
                            </div>
                        </div>
                        <div class="info_usuario--editar_step" id="info_usuario--editar_steppers3" onClick={this.metodoNotificaciones}>
                            <div>
                                <div class="info_usuario--editar_circle">3</div>
                            </div>
                            <div>
                                <div class="info_usuario--editar_title">Notificaciones Email</div>
                            </div>
                        </div>
                        <div class="info_usuario--editar_step" id="info_usuario--editar_steppers4" onClick={this.metodoCambiarContrasenia}>
                            <div>
                                <div class="info_usuario--editar_circle">4</div>
                            </div>
                            <div>
                                <div class="info_usuario--editar_title">Cambiar Contraseña</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}