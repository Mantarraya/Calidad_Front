import React from "react";
import { Link,withRouter } from "react-router-dom";


class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.iniciarSesion=this.iniciarSesion.bind(this);    
    }

    iniciarSesion(e){
        e.preventDefault();

        fetch("https://back-calidad.herokuapp.com/api/login-alumno",{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                'name':'uwu',
                'password':'uwu'
            })
        })
        .then(function(response){
            console.log(response)
            return response.text();
        })
        .then(function (data){
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
            alert("error")
        })
        e.preventDefault();
        this.props.history.push('/home_user')
    }

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="/">TechFazt</a>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item ">
                                <Link class="nav-link" href="#">Servicios</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">Acerca de</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link" href="#">Únete</Link>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="email" placeholder="Email"/>
                            <input class="form-control  mr-sm-2" type="password" name="" placeholder="Contraseña" value=""/>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.iniciarSesion}>Entrar</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
export default withRouter(NavBar);