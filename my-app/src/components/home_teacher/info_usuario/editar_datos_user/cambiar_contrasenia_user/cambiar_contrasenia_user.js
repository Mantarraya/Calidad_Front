import React from "react";

import './cambiar_contrasenia_user.css'

export default class CambiarContraseniaUser extends React.Component{
    render(){
        return(
            <div className="info_usuario--cambiar_contrasenia_basica_user">
                <p class="h3">Cambiar Contraseña</p>
                <div class="alert alert-danger" role="alert">
                    A simple danger alert with an example link. Give it a click if you like.
                </div>
                <div className="info_usuario--cambiar_contrasenia_basica_user_main">
                    <form>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Nueva Contraseña</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword" placeholder=""/>
                            </div>
                        </div>
                        <hr/>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Confirmar Contraseña</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword" placeholder=""/>
                            </div>
                        </div>
                    </form>

                    <div class="row">
                            <div class="col-lg-12">
                                <button class="btn btn-danger float-right">CAMBIAR</button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
