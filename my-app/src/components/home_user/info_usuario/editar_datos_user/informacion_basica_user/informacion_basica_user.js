import React from "react";

import './informacion_basica_user.css'

export default class InformacionBasicaUser extends React.Component{

    render(){
        return(
            <div className="info_usuario--editar_informacion_basica_user">
                <p class="h3">Informacion Basica</p>
                <div className="info_usuario--editar_informacion_basica_user_main">
                    <form>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Nombres</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control bg-light" id="inputPassword" placeholder=""/>
                            </div>
                        </div>
                        <hr/>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Apellidos</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control bg-light" id="inputPassword" placeholder=""/>
                            </div>
                        </div>
                        <hr/>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                            <input type="email" class="form-control bg-light" id="inputPassword" placeholder=""/>
                            </div>
                        </div>
                    </form>
                    <div class="row">
                            <div class="col-lg-12">
                                <button class="btn btn-danger float-right">GUARDAR</button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}