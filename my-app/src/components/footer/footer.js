import React from "react";

import './footer.css'

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div class="footer_superior">
                    <div class="footer_superior--listas">
                        <div class="footer_superior--list footer_superior--lista1">
                        <h3>Aprende</h3>
                            <ul>
                                <li>uno</li>
                                <li>dos</li>
                                <li>tres</li>
                            </ul>
                        </div>
                        <div class="footer_superior--list footer_superior--lista2">
                        <h3>Aprende</h3>
                            <ul>
                                <li>uno</li>
                                <li>dos</li>
                                <li>tres</li>
                            </ul>
                        </div>
                        <div class="footer_superior--list footer_superior--lista3">
                        <h3>Aprende</h3>
                            <ul>
                                <li>uno</li>
                                <li>dos</li>
                                <li>tres</li>
                            </ul>
                        </div>
                        
                        <div class="footer_superior--list footer_superior--lista4">
                        <h3>Aprende</h3>
                            <p>
                                Velit tempora voluptates sunt, mollitia fuga nisi itaque. Iusto molestias optio dolorem facilis repellat corrupti non facere.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="footer_inferior">
                    <div class="footer_inferior-contenido">
                        <div class="footer_inferior--seguidor">
                            <h3>Siguemos en</h3>
                            <ul>
                                <li>F</li>
                                <li>T</li>
                                <li>V</li>
                                <li>Y</li>
                            </ul>
                        </div>
                        <div class="footer_inferior--info">
                            <p>
                                <span>Terminos</span>
                                <span>Politica Privasidad</span>
                            </p>
                            <p>
                                Copyright 2019 All rights reservet
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}