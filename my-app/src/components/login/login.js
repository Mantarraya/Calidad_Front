import React,{ Component } from "react"

import NavBar from "../navbar/navbar";

import './login.css'
import Footer from "../footer/footer";
import AuthEstudiante from '../restricciones/auth_estudiante'

export default class Login extends Component{

    constructor(props){
        super(props)

        var p=new AuthEstudiante()
        if(!p.verificarEstudiante()){
            this.props.history.push('/home_user');
        }
        this.registrarNuevoUsuario=this.registrarNuevoUsuario.bind(this)
        this.iniciarSesionConFacebook=this.iniciarSesionConFacebook.bind(this)
    }



    iniciarSesionConFacebook(e){
        fetch("https://back-calidad.herokuapp.com/api/login/facebook",{

        });
        
    }

    registrarNuevoUsuario(e){
        
        e.preventDefault();
        fetch('https://back-calidad.herokuapp.com/api/register-alumno',{
            method:'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "username": "11",
                "password": "1234",
                "firstname": "elvis",
                "lastname": "zapatero",
                "email": "prueba@hotmail.com" 
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
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                        <div className="form-group login--cuadro_principal_password">
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                        </div>
                                        <div class="form-group login--cuadro_principal_username">
                                            <input type="text"  className="form-control" name="username"id="usernameField"  placeholder="Username"value=""/>
                                        </div>
                                        <button type="submit" className="btn btn-outline-dark w-100" onClick={this.registrarNuevoUsuario}> <span class="font-weight-bold">Regístrate</span></button>
                                        <p class="btn  btn-outline-primary w-100 mt-3 " onClick={this.iniciarSesionConFacebook}>
                                            <i className="fab fa-facebook"></i>
                                            <span className="font-weight-bold"> Ingresa con Facebook</span>
                                        </p>
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