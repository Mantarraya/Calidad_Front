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

        steppers1.onclick=()=>{
            steppers1.classList.add("info_usuario--editar_step-active");
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
                        <div class="info_usuario--editar_step info_usuario--editar_step-active"  id="info_usuario--editar_steppers1" >
                            <div>
                                <div class="info_usuario--editar_circle">1</div>
                            </div>
                            <div>
                                <div class="info_usuario--editar_title">Informacion Basica</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}