import React,{ Component } from "react"

import NavBar from "../navbar/navbar";

import './login.css'
import Footer from "../footer/footer";

export default class Login extends Component{




    render(){
        return(
            <div>
                <NavBar/>
                <div class="login--main">
                    <div class="login--cuadro_informativo">
                        <h1>Bienvenido a TechFazt</h1>
                        <p>La plataforma que te ayudara a conocer</p>
                    </div>
                    <div class="login--cuadro_registro">
                    <h1>Aprende con nosotros</h1>
                    <p>Registrate en pocos segundos</p>
                        <form action="">
                            <input type="text" placeholder="Ingrese Correo"/>
                            <input type="text" placeholder="Contraseña"/>
                            <input type="text" placeholder="Nombre Usuario"/>
                            <button class="login--btn_registrarse">Registrarse</button>
                        </form>
                        
                        <button class="login--btn_ingresar_fb" type="button"> Ingresa con Facebook</button>
                        
                    </div>
                </div>
                <Footer/>
            </div>
            
        );
    }
}