import React from "react";

import "./cursos.css";

export default class Cursos extends React.Component{

    constructor(props){
        super(props)
        this.state={
            lista_cursos:[]
        }
    }
    render(){
        return(
            <div className="container info_usuario--cursos">
                <div>
                    <div className="card info_usuario--cursos-frame-inicial">
                        <div className="info_usuario--cursos-frame-inicial-title">
                            <h2 className="text-center">Introducción a la Física</h2>
                        </div>
                        
                        <div className="info_usuario--cursos-flex-container info_usuario--cursos-frame-inicial-text">
                            <p className="info_usuario--cursos-frame-inicial-tiempo">50 minutos restantes</p>
                            <p className="info_usuario--cursos-frame-inicial-clases">12 clases</p>
                        </div>
                        <div className="info_usuario--cursos-flex-container info_usuario--cursos-frame-inicial-btn">
                            <div className="card info_usuario--cursos-frame-inicial-1">
                                <p className="info_usuario--cursos-frame-inicial-enlace-1">Resumen</p>
                            </div>
                            <div className="card info_usuario--cursos-frame-inicial-2">
                                <p className="info_usuario--cursos-frame-inicial-enlace-2">Comenzar de nuevo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="info_usuario--cursos-flex-container"> 
                        <h4>Ruta de Aprendizaje</h4>
                        <p className="info_usuario--cursos-enlace-ruta">Todos mis caminos de aprendizaje</p>
                    </div>
                    <div className="info_usuario--cursos-flex-container-rutas">
                        <div className="info_usuario--cursos-algebra-ruta">
                            <img src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/angular_40x40.svg"></img>
                            <p className="info_usuario--cursos-alg"><b>Álgebra</b></p>
                            <p className="info_usuario--cursos-enlace-resumen-alg">Resumen</p>
                        </div>
                        <div className="info_usuario--cursos-geometria-ruta">
                            <img src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/angular_40x40.svg"></img>
                            <p className="info_usuario--cursos-geom"><b>Geometría</b></p>
                            <p className="info_usuario--cursos-enlace-resumen-geom">Resumen</p>
                        </div>
                    </div>
                    <div className="info_usuario--cursos-flex-container">
                        <div className="info_usuario--cursos-aritmetica-ruta">
                            <img src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/angular_40x40.svg"></img>
                            <p className="info_usuario--cursos-arit"><b>Aritmética</b></p>
                            <p className="info_usuario--cursos-enlace-resumen-arit">Resumen</p>
                        </div>
                        <div className="info_usuario--cursos-fisica-ruta">
                            <img src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/angular_40x40.svg"></img>
                            <p className="info_usuario--cursos-fis"><b>Física</b></p>
                            <p className="info_usuario--cursos-enlace-resumen-fis">Resumen</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="info_usuario--cursos-flex-container">
                        <h4>Los Cursos</h4>
                        <p className="info_usuario--cursos-enlace">Todos mis cursos</p>
                    </div>
                    <div className="info_usuario--cursos-2-flex-container">
                        <div className="card info_usuario--cursos-cuadro-trigo">
                            <p><p className="text-center info_usuario--cursos-1">Trigonometría</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>
                        <div className="card info_usuario--cursos-cuadro-geof">
                            <p><p className="text-center info_usuario--cursos-2">Geografía</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>
                        <div className="card info_usuario--cursos-cuadro-biolo">
                            <p><p className="text-center info_usuario--cursos-3">Biología</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>
                        <div className="card info_usuario--cursos-cuadro-histo">
                            <p><p className="text-center info_usuario--cursos-4">Historia</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>                                            
                    </div>
                    <div className="info_usuario--cursos-3-flex-container">
                        <div className="card info_usuario--cursos-cuadro-quim">
                            <p><p className="text-center info_usuario--cursos-5">Química</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>
                        <div className="card info_usuario--cursos-cuadro-art">
                            <p><p className="text-center info_usuario--cursos-6">Arte</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>
                        <div className="card info_usuario--cursos-cuadro-leng">
                            <p><p className="text-center info_usuario--cursos-7">Lenguaje</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>
                        <div className="card info_usuario--cursos-cuadro-lite">
                            <p><p className="text-center info_usuario--cursos-8">Literatura</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>                                            
                    </div>
                </div>
                <div>
                    <div className="info_usuario--cursos-logros-flex-container">
                        <h4>Logros</h4>
                        <p className="info_usuario--cursos-logros-enlace">Mis logros</p>
                    </div>
                    <div className="info_usuario--cursos-logros-flex-container">
                        <div className="card info_usuario--cursos-logros-cuadro-1">
                            <div className="info_usuario--cursos-logros-cuadro-flex">
                                <div>
                                    <h5 className="info_usuario--cursos-logros-titulo">Logro</h5>
                                    <p className="info_usuario--cursos-logros-fecha">05 Junio, 2019</p>
                                    <img className="info_usuario--cursos-logros-img" src="http://tutorio-bootstrap.frontendmatter.com/assets/images/illustration/achievement/128/white.png"></img>
                                </div> 
                                <div>
                                    <h5 className="info_usuario--cursos-logros-titulo-curso">Álgebra</h5>
                                    <p className="info_usuario--cursos-logro-descripcion-curso">Conocimiento avanzando en Productos Notables</p>
                                </div>
                                <div>
                                    <img className="info_usuario--cursos-logros-icono" src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/flinto_40x40@2x.png"></img>
                                </div>
                            </div>
                        </div>
                        <div className="card info_usuario--cursos-logros-cuadro-2">
                        <div className="info_usuario--cursos-logros-cuadro-flex">
                                <div>
                                    <h5 className="info_usuario--cursos-logros-titulo">Logro</h5>
                                    <p className="info_usuario--cursos-logros-fecha">04 Junio, 2019</p>
                                    <img className="info_usuario--cursos-logros-img" src="http://tutorio-bootstrap.frontendmatter.com/assets/images/illustration/achievement/128/white.png"></img>
                                </div> 
                                <div>
                                    <h5 className="info_usuario--cursos-logros-titulo-curso">Aritmética</h5>
                                    <p className="info_usuario--cursos-logro-descripcion-curso">Conocimiento avanzando en Razones y Proporciones</p>
                                </div>
                                <div>
                                    <img className="info_usuario--cursos-logros-icono" src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/angular_40x40@2x.png"></img>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}