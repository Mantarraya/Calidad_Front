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
                        <div>
                            <div>
                                <h5 className="informacion_teacher--escoja-cursos">Escoja los cursos que desee dictar</h5>
                            </div>
                            <div className="informacion_teacher_container-escoge-cursos">
                                <div className="card informacion_teacher_escoge-cursos-mate">
                                    <div>
                                        <h6 className="informacion_teacher--titulo-mate">Matemáticas</h6>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation1" required></input>
                                        <label className="custom-control-label lbl-name" for="customControlValidation1">Aritmética</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation2" required></input>
                                        <label className="custom-control-label lbl-name" for="customControlValidation2">Álgebra</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation3" required></input>
                                        <label className="custom-control-label lbl-name" for="customControlValidation3">Geometría</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation4" required></input>
                                        <label className="custom-control-label lbl-name" for="customControlValidation4">Trigonometría</label>
                                    </div>
                                </div>
                                <div className="card informacion_teacher_escoge-cursos-ciencias">
                                    <div>
                                        <h6 className="informacion_teacher--titulo-ciencias">Ciencias</h6>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation5" required></input>
                                        <label className="custom-control-label lbl-name lbl-ciencias" for="customControlValidation5">Biología</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation6" required></input>
                                        <label className="custom-control-label lbl-name lbl-ciencias" for="customControlValidation6">Física</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation7" required></input>
                                        <label className="custom-control-label lbl-name lbl-ciencias" for="customControlValidation7">Química</label>
                                    </div>
                                </div>
                                <div className="card informacion_teacher_escoge-cursos-sociales">
                                    <div>
                                        <h6 className="informacion_teacher--titulo-sociales">Sociales</h6>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation8" required></input>
                                        <label className="custom-control-label lbl-name lbl-sociales" for="customControlValidation8">Historia</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation9" required></input>
                                        <label className="custom-control-label lbl-name lbl-sociales" for="customControlValidation9">Geografía</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation10" required></input>
                                        <label className="custom-control-label lbl-name lbl-sociales" for="customControlValidation10">Economía</label>
                                    </div>
                                </div>
                                <div className="card informacion_teacher_escoge-cursos-letras">
                                    <div>
                                        <h6 className="informacion_teacher--titulo-letras">Letras</h6>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation11" required></input>
                                        <label className="custom-control-label lbl-name lbl-letras" for="customControlValidation11">Lenguaje</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customControlValidation12" required></input>
                                        <label className="custom-control-label lbl-name lbl-letras" for="customControlValidation12">Literatura</label>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="col-auto my-1">
                                <label class="mr-sm-2" for="inlineFormCustomSelect">Seleccione su grado académico</label>
                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Grado académico...</option>
                                    <option value="1">Profesional</option>
                                    <option value="2">Técnico</option>
                                    <option value="3">Estudiante-Universitario</option>
                                    <option value="4">Secundaria Completa</option>
                                </select>
                            </div>
                            <hr/>
                        </div>                        
                    </form>
                    <div class="row informacion_teacher--btn-guardar">
                            <div class="col-lg-12">
                                <button class="btn btn-danger float-right" onClick={this.btnActualizarDatos}>GUARDAR</button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}