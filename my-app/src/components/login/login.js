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
            pass_user:''
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



    iniciarSesionConFacebook(e){
        fetch("https://back-calidad.herokuapp.com/api/login/facebook",{

        });
        
    }

    registrarNuevoUsuario(e){
        var that=this;
        e.preventDefault();
        fetch('https://back-calidad.herokuapp.com/api/register-alumno',{
            method:'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "username": that.state.username_user,
                "password": that.state.pass_user,
                "firstname": that.state.nombres_user,
                "lastname": that.state.apellidos_user,
                "email": that.state.email_user 
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
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email_user} onChange={this.addEmail}/>
                                        </div>
                                        <div className="form-group login--cuadro_principal_password">
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value={this.state.pass_user} onChange={this.addPassword}/>
                                        </div>
                                        <div className="form-group login--cuadro_principal_username">
                                            <input type="text"  className="form-control" name="username"id="usernameField"  placeholder="Username" value={this.state.username_user} onChange={this.addUsername}/>
                                        </div>
                                        <button type="submit" className="btn btn-outline-dark w-100" onClick={this.registrarNuevoUsuario}> <span className="font-weight-bold">Regístrate</span></button>
                                        
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