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
                    <div className="card cursos-frame-inicial">
                        <div className="cursos-frame-inicial-title">
                            <h2 className="text-center">Introducción a la Física</h2>
                        </div>
                        
                        <div className="flex-container cursos-frame-inicial-text">
                            <p className="cursos-frame-inicial-tiempo">50 minutos restantes</p>
                            <p className="cursos-frame-inicial-clases">12 clases</p>
                        </div>
                        <div className="flex-container cursos-frame-inicial-btn">
                            <div className="card cursos-frame-inicial-1">
                                <a className="cursos-frame-inicial-enlace-1" href="#">Resumen</a>
                            </div>
                            <div className="card cursos-frame-inicial-2">
                                <a className="cursos-frame-inicial-enlace-2" href="#">Comenzar de nuevo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex-container"> 
                        <h4>Ruta de Aprendizaje</h4>
                        <a href="#" className="cursos-enlace-ruta">Todos mis caminos de aprendizaje</a>
                    </div>
                    <div className="flex-container-rutas">
                        <div className="cursos-algebra-ruta">
                            <img src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/angular_40x40.svg"></img>
                            <p className="cursos-alg"><b>Álgebra</b></p>
                            <a href="#" className="cursos-enlace-resumen-alg">Resumen</a>
                        </div>
                        <div className="cursos-geometria-ruta">
                            <img src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/angular_40x40.svg"></img>
                            <p className="cursos-alg"><b>Geometría</b></p>
                            <a href="#" className="cursos-enlace-resumen-geom">Resumen</a>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="cursos-aritmetica-ruta">
                            <img src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/angular_40x40.svg"></img>
                            <p className="cursos-alg"><b>Aritmética</b></p>
                            <a href="#" className="cursos-enlace-resumen-arit">Resumen</a>
                        </div>
                        <div className="cursos-fisica-ruta">
                            <img src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/angular_40x40.svg"></img>
                            <p className="cursos-alg"><b>Física</b></p>
                            <a href="#" className="cursos-enlace-resumen-fis">Resumen</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cursos-flex-container">
                        <h4>Los Cursos</h4>
                        <a href="#" className="cursos-enlace">Todos mis cursos</a>
                    </div>
                    <div className="cursos-2-flex-container">
                        <div className="card cursos-cuadro">
                            <a href="#"><p className="text-center cursos-trigo">Trigonometría</p></a>
                            <a href="#" className="cursos-enlace-final"><p className="text-center texto-enlace-final">Aprender desde cero</p></a>
                        </div>
                        <div className="card cursos-cuadro-geof">
                            <a href="#"><p className="text-center cursos-trigo">Geografía</p></a>
                            <a href="#" className="cursos-enlace-final"><p className="text-center texto-enlace-final">Aprender desde cero</p></a>
                        </div>
                        <div className="card cursos-cuadro-biolo">
                            <a href="#"><p className="text-center cursos-trigo">Biología</p></a>
                            <a href="#" className="cursos-enlace-final"><p className="text-center texto-enlace-final">Aprender desde cero</p></a>
                        </div>
                        <div className="card cursos-cuadro-histo">
                            <a href="#"><p className="text-center cursos-trigo">Historia</p></a>
                            <a href="#" className="cursos-enlace-final"><p className="text-center texto-enlace-final">Aprender desde cero</p></a>
                        </div>                                            
                    </div>
                    <div className="cursos-3-flex-container">
                        <div className="card cursos-cuadro">
                            <a href="#"><p className="text-center cursos-trigo">Trigonometría</p></a>
                            <a href="#" className="cursos-enlace-final"><p className="text-center texto-enlace-final">Aprender desde cero</p></a>
                        </div>
                        <div className="card cursos-cuadro-geof">
                            <a href="#"><p className="text-center cursos-trigo">Geografía</p></a>
                            <a href="#" className="cursos-enlace-final"><p className="text-center texto-enlace-final">Aprender desde cero</p></a>
                        </div>
                        <div className="card cursos-cuadro-biolo">
                            <a href="#"><p className="text-center cursos-trigo">Biología</p></a>
                            <a href="#" className="cursos-enlace-final"><p className="text-center texto-enlace-final">Aprender desde cero</p></a>
                        </div>
                        <div className="card cursos-cuadro-histo">
                            <a href="#"><p className="text-center cursos-trigo">Historia</p></a>
                            <a href="#" className="cursos-enlace-final"><p className="text-center texto-enlace-final">Aprender desde cero</p></a>
                        </div>                                            
                    </div>
                </div>
                <div>
                    <div className="cursos-logros-flex-container">
                        <h4>Logros</h4>
                        <a href="#" className="cursos-logros-enlace">Mis logros</a>
                    </div>
                    <div className="cursos-logros-flex-container">
                        <div className="card cursos-logros-cuadro-1">
                            <div className="cursos-logros-cuadro-flex">
                                <div>
                                    <h5 className="cursos-logros-titulo">Logro</h5>
                                    <p className="cursos-logros-fecha">05 Junio, 2019</p>
                                    <img className="cursos-logros-img" src="http://tutorio-bootstrap.frontendmatter.com/assets/images/illustration/achievement/128/white.png"></img>
                                </div> 
                                <div>
                                    <h5 className="cursos-logros-titulo-curso">Álgebra</h5>
                                    <p className="cursos-logro-descripcion-curso">Conocimiento avanzando en Productos Notables</p>
                                </div>
                                <div>
                                    <img className="cursos-logros-icono" src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/flinto_40x40@2x.png"></img>
                                </div>
                            </div>
                        </div>
                        <div className="card cursos-logros-cuadro-2">
                        <div className="cursos-logros-cuadro-flex">
                                <div>
                                    <h5 className="cursos-logros-titulo">Logro</h5>
                                    <p className="cursos-logros-fecha">04 Junio, 2019</p>
                                    <img className="cursos-logros-img" src="http://tutorio-bootstrap.frontendmatter.com/assets/images/illustration/achievement/128/white.png"></img>
                                </div> 
                                <div>
                                    <h5 className="cursos-logros-titulo-curso">Aritmética</h5>
                                    <p className="cursos-logro-descripcion-curso">Conocimiento avanzando en Razones y Proporciones</p>
                                </div>
                                <div>
                                    <img className="cursos-logros-icono" src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/angular_40x40@2x.png"></img>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}