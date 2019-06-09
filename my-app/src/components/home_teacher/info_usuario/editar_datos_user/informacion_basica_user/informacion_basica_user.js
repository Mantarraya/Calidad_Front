import React from "react";

import './informacion_basica_user.css'

export default class InformacionBasicaUser extends React.Component{


    constructor(props){
        super(props)

        this.state={
            new_nombre:localStorage.getItem('nombres'),
            new_apellido:localStorage.getItem('apellidos')
        }

        this.addNuevoNombre=this.addNuevoNombre.bind(this)
        this.addNuevoApellido=this.addNuevoApellido.bind(this)
        this.btnActualizarDatos=this.btnActualizarDatos.bind(this)
    }

    addNuevoNombre(e){
        this.setState({
            new_nombre:e.target.value
        })
    }
    addNuevoApellido(e){
        this.setState({
            new_apellido:e.target.value
        })
    }


    btnActualizarDatos(e){

        e.preventDefault();
        var that = this
       fetch('https://back-calidad.herokuapp.com/api/alumno/actualizar/'+localStorage.getItem('id_user'),{
            method:'PUT',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'username':localStorage.getItem('username'),
                'firstname':that.state.new_nombre,
                'lastname':that.state.new_apellido,
                'email':localStorage.getItem('email'),
            })
       })
       .then(function (response){ 
            alert("Datos actualizados")

            localStorage.setItem("nombres",that.state.new_nombre)
            localStorage.setItem("apellidos",that.state.new_apellido)
            return response.json();
        })
    }

    render(){
        return(
            <div className="info_usuario--editar_informacion_basica_user">
                <p class="h3">Informacion Basica</p>
                <div className="info_usuario--editar_informacion_basica_user_main">
                    <form>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Nombres</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control bg-light" id="inputPassword" placeholder="" value={this.state.new_nombre} onChange={this.addNuevoNombre}/>
                            </div>
                        </div>
                        <hr/>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Apellidos</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control bg-light" id="inputPassword" placeholder="" value={this.state.new_apellido} onChange={this.addNuevoApellido}/>
                            </div>
                        </div>
                        <hr/>
                    </form>
                    <div class="row">
                            <div class="col-lg-12">
                                <button class="btn btn-danger float-right" onClick={this.btnActualizarDatos}>GUARDAR</button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}