import React,{ Component } from "react";


import  Footer from "../footer/footer";
import NavBar from "../navbar/navbar";

import './error404.css'

class Error404 extends Component{

    render(){
        return(
            <div>
                <NavBar/>
                <div className="container error404--main">
                    Escribe tu codigo para el 404
                </div>
                <Footer/>
            </div>
            
        );
    }
}

export default Error404;