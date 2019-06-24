import React,{ Component } from "react"

import NavBar from "../navbar/navbar";

import './login.css'
import Footer from "../footer/footer";
import AuthEstudiante from '../restricciones/auth_estudiante'

export default class Login extends Component{

    constructor(props){
        super(props)


        this.state={
            nombres_user:'',
            apellidos_user:'',
            username_user:'',
            email_user:'',
            pass_user:'',
            edad_user:'',
            rol_user:'',
            genero_user:''
        }

        var p=new AuthEstudiante()
        if(!p.verificarEstudiante()){
            this.props.history.push('/home_user');
        }
        this.registrarNuevoUsuario=this.registrarNuevoUsuario.bind(this)
        this.iniciarSesionConFacebook=this.iniciarSesionConFacebook.bind(this)
        this.addUsername=this.addUsername.bind(this)
        this.addEmail=this.addEmail.bind(this)
        this.addPassword=this.addPassword.bind(this)
        this.addNombres=this.addNombres.bind(this)
        this.addApellidos=this.addApellidos.bind(this)
        this.addEdad=this.addEdad.bind(this)
        this.addRol=this.addRol.bind(this)
        this.addGenero=this.addGenero.bind(this)
    }

    addUsername(e){
        this.setState({
            username_user:e.target.value
        })
    }

    addEmail(e){
        this.setState({
            email_user:e.target.value
        })
    }
    
    addPassword(e){
        this.setState({
            pass_user:e.target.value
        })
    }
    addNombres(e){
        this.setState({
            nombres_user:e.target.value
        })
    }
    addApellidos(e){
        this.setState({
            apellidos_user:e.target.value
        })
    }

    addEdad(e){
        this.setState({
            edad_user:e.target.value
        })
    }

    addRol(e){
        this.setState({
            rol_user:e.target.value
        })
    }

    addGenero(e){
        this.setState({
            genero_user: e.target.value
        })
    }



    iniciarSesionConFacebook(e){
        fetch("https://api-calida.herokuapp.com/api/login/facebook",{

        });
        
    }

    registrarNuevoUsuario(e){
        console.log(this.state)
        var that=this;
        e.preventDefault();
        fetch('https://api-calida.herokuapp.com/api/register-alumno',{
            method:'POST',
            headers:{
                'Accept': 'application/json, */*',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "username": that.state.username_user,
                "password": that.state.pass_user,
                "firstname": that.state.nombres_user,
                "lastname": that.state.apellidos_user,
                "email": that.state.email_user,
                "edad": that.state.edad_user,
                "usuario": that.state.rol_user,
                "genero": that.state.genero_user
            })
        })
        .then(function(response){
            console.log(response)
            return response.text();
        })
        .then(function (data){
            alert("Inicio registro")

            console.log(data)
        })
        .catch(err=>{
            console.log(err)
            alert("error")
        })
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <NavBar/>
                <div className="container-fluid">
                    <div className="row login--fondo">
                        <div className="col-sm-6">
                            <div className="card login--cuadro_titulo">
                                <div className="card-body login--cuadro_titulo_texto" >
                                    <h1 className=" display-3 font-weight-bold text-white text-center">Bienvenidos a TechFazt</h1>
                                    <h3 className=" text-white text-center">La plataforma que te ayudará a conocer</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card w-50 login--cuadro_principal">
                                <div className="card-body">
                                    <h2 className="text-center font-weight-bold">Aprende con nosotros</h2>
                                    <h5 className="text-center">Regístrate en pocos segundos</h5>
                                    <form >
                                        <div className="form-group login--cuadro_principal_email">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombres" value={this.state.nombres_user} onChange={this.addNombres}/>
                                        </div>
                                        <div className="form-group login--cuadro_principal_email">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apellidos" value={this.state.apellidos_user} onChange={this.addApellidos}/>
                                        </div>
                                        <div className="form-group login--cuadro_principal_email">
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo" value={this.state.email_user} onChange={this.addEmail}/>
                                        </div>
                                        <div className="form-group login--cuadro_principal_password">
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"  value={this.state.pass_user} onChange={this.addPassword}/>
                                        </div>
                                        <div className="form-group login--cuadro_principal_username">
                                            <input type="text"  className="form-control" name="username"id="usernameField"  placeholder="Nombre de Usuario" value={this.state.username_user} onChange={this.addUsername}/>
                                        </div>
                                        <div className="form-group login--cuadro_principal_username">
                                            <input type="number" min='18' max='70' className="form-control" name="edad"id="edadField"  placeholder="Edad" value={this.state.edad_user} onChange={this.addEdad}/>
                                        </div>     
                                        <div className="login--escoje-rol-container">
                                            <h6 className="login--title-escoje-rol">Escoja su Rol</h6>
                                            <div className="login--escoje-rol">
                                                <div class="col-auto my-1">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input" name="rol_user" id="Alumno" value="Alumno" onClick={this.addRol}/>
                                                        <label class="custom-control-label" name="lbl-alumno" htmlFor="Alumno">Alumno</label>
                                                    </div>
                                                </div>
                                                <div class="col-auto my-1">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input" name="rol_user" id="Profesor" value="Profesor" onClick={this.addRol}/>
                                                        <label class="custom-control-label" name="lbl-profesor" htmlFor="Profesor">Profesor</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login--escoje-genero-container">
                                            <h6 className="login--title-escoje-genero">Escoja su Género</h6>
                                            <div className="login--escoje-genero">
                                                <div class="col-auto my-1">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input" name="genero_user" value="Masculino" id="Masculino" onClick={this.addGenero}/>
                                                        <label class="custom-control-label" name="lbl-masculino" htmlFor="Masculino">Masculino</label>
                                                    </div>
                                                </div>
                                                <div class="col-auto my-1">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input" name="genero_user" value="Femenino" id="Femenino" onClick={this.addGenero}/>
                                                        <label class="custom-control-label" name="lbl-femenino" htmlFor="Femenino">Femenino</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-outline-dark w-100 login--register-btn" onClick={this.registrarNuevoUsuario}> <span className="font-weight-bold">Regístrate</span></button>
                                    </form>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
        );
    }
}