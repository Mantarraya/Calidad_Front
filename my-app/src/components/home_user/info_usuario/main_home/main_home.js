import React from "react";

import './main_home.css'

export default class MainHome extends React.Component{
    render(){
        return(
            <main>
                <div class="suscripcion">
                    <p class="fecha">
                        Tu suscripcion termina el <b>25 Fecbrero 2019</b>
                    </p>
                </div>
                <div class="total_cuadros">
                    <div class="cuadro cuadro1"></div>
                    <div class="cuadro cuadro2">
                        <div class="cuadro2_1"></div>
                        <div class="cuadro2_2"></div>
                    </div>
                </div>
            </main>
        );
    }
}