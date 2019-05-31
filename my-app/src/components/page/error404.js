import React, { Component } from "react";


import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";

import './error404.css'

class Error404 extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <div className="container error404--main">

                    <div id="notfound">
                        <div class="notfound">
                            <div class="notfound-404">

                                <h1>Oops!</h1>
                                <h2>404 - Página no encontrada</h2>
                            </div>
                            <br></br>

                            <img src="https://media.giphy.com/media/Vg0RJZdxlAozNsspbu/giphy.gif" alt="Faztteach" width='500px' />

                            <br></br>
                            <a href="/">Regresar al inicio de página</a>
                        </div>
                    </div>




                </div>
                <Footer />
            </div>

        );
    }
}

export default Error404;