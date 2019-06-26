import React from "react";

import "./cursos.css";

export default class Cursos extends React.Component{

    constructor(props){
        super(props)
        this.state={
            lista_cursos:[]
        }

    }

    componentDidMount(){
        const that = this;

        fetch('https://api-calida.herokuapp.com/api/curso/obtenerCursos')
        .then((res)=>res.json())
        .then((data)=>{

            that.setState({
                lista_cursos:data
            })
            console.log(that.state.lista_cursos)

        })
    }

    render(){
        console.log()
        return(
            <div className="container info_usuario--cursos">
                <div>
                    <div className="card info_usuario--cursos-frame-inicial">
                        <div className="info_usuario--cursos-frame-inicial-title">
                            <h2 className="text-center">Cursos disponibles</h2>
                        </div>
                        <div className="info_usuario--cursos-flex-container info_usuario--cursos-frame-inicial-text">
                            <p className="info_usuario--cursos-frame-inicial-tiempo">Todos los temas actualizados</p>
                            <p className="info_usuario--cursos-frame-inicial-clases">12 cursos</p>
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
                        <h4>Orden de Aprendizaje</h4>
                        <p className="info_usuario--cursos-enlace-ruta">Todos mis caminos de aprendizaje</p>
                    </div>
                    <div className="info_usuario--cursos-ruta-container">
                        <div className="card border-primary mb-3 info_usuario--cursos-ruta-desc-1">
                            <div className="card-header info_usuario--cursos-ruta-desc-title">Descripción <i class="fas fa-brain"></i></div>
                            <div className="card-body text-primary">
                                <h5 className="card-title"><i class="fas fa-list-ol"></i> Sigue el Orden</h5>
                                <p className="card-text info_usuario--cursos-ruta-body">En FazTeach te ayudamos si no sabes como empezar a prepararte. <br></br> En el área de ciencias y matemáticas
                                es importante que vayas paso a paso para que tu aprendizaje sea el adecuado. <br></br> Te planteamos este orden para ayudarte a estudiar de manera eficiente
                                y eficaz para que logres todos tus objetivos académicos.</p>
                            </div>
                        </div>
                        <div className="card border-primary mb-3 info_usuario--cursos-ruta-desc-2">
                            <div className="card-header info_usuario--cursos-ruta-desc-title">¿Porqué este orden? <i class="far fa-question-circle"></i></div>
                            <div className="card-body text-primary">
                                <h5 className="card-title"><i class="fas fa-check-circle"></i> Experiencia de Calidad</h5>
                                <p className="card-text info_usuario--cursos-ruta-body">El orden que FazTeach ha establecido es el resultado de una recopilación de opiniones de alumnos de las diversas academias y universidades de Lima.
                                <br></br>También nos basamos en análisis de exámenes de admisión y primeros ciclos de universidad. <br></br>
                                Confiamos en que si se sigue esta ruta de aprendizaje se obtendrán resultados exitosos.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="info_usuario--cursos-flex-container-rutas">
                            <div className="info_usuario--cursos-aritmetica-ruta">
                                <div class="info_usuario--cursos-editar_circle-arit">1</div>
                                <p className="info_usuario--cursos-arit"><b>{this.state.lista_cursos[9]==null?"":this.state.lista_cursos[9].nombre}</b></p>
                                <p className="info_usuario--cursos-enlace-resumen-arit">Ver curso</p>
                            </div>
                            <div className="info_usuario--cursos-algebra-ruta">
                                <div class="info_usuario--cursos-editar_circle-alg">2</div>
                                <p className="info_usuario--cursos-alg"><b>{this.state.lista_cursos[8]==null?"":this.state.lista_cursos[8].nombre}</b></p>
                                <p className="info_usuario--cursos-enlace-resumen-alg">Ver curso</p>
                            </div>
                        </div>
                        <div className="info_usuario--cursos-flex-container-rutas">
                            <div className="info_usuario--cursos-geometria-ruta">
                                <div class="info_usuario--cursos-editar_circle-geom">3</div>
                                <p className="info_usuario--cursos-geom"><b>{this.state.lista_cursos[0]==null?"":this.state.lista_cursos[0].nombre}</b></p>
                                <p className="info_usuario--cursos-enlace-resumen-geom">Ver curso</p>
                            </div>
                            <div className="info_usuario--cursos-fisica-ruta">
                                <div class="info_usuario--cursos-editar_circle-fis">4</div>
                                <p className="info_usuario--cursos-fis"><b>{this.state.lista_cursos[2]==null?"":this.state.lista_cursos[2].nombre}</b></p>
                                <p className="info_usuario--cursos-enlace-resumen-fis">Ver curso</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="info_usuario--cursos-flex-container-cursos">
                        <h4>Los Cursos</h4>
                        <p className="info_usuario--cursos-enlace">Todos mis cursos</p>
                    </div>
                    <div className="info_usuario--cursos-2-flex-container">
                        <div className="card info_usuario--cursos-cuadro-trigo">
                            <p><p className="text-center info_usuario--cursos-1">{this.state.lista_cursos[3]==null?"":this.state.lista_cursos[3].nombre}</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>
                        <div className="card info_usuario--cursos-cuadro-geof">
                            <p><p className="text-center info_usuario--cursos-2">{this.state.lista_cursos[8]==null?"":this.state.lista_cursos[8].nombre}</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>
                        <div className="card info_usuario--cursos-cuadro-biolo">
                            <p><p className="text-center info_usuario--cursos-3">{this.state.lista_cursos[6]==null?"":this.state.lista_cursos[6].nombre}</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>
                        <div className="card info_usuario--cursos-cuadro-histo">
                            <p><p className="text-center info_usuario--cursos-4">{this.state.lista_cursos[7]==null?"":this.state.lista_cursos[7].nombre}</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>                                            
                    </div>
                    <div className="info_usuario--cursos-3-flex-container">
                        <div className="card info_usuario--cursos-cuadro-quim">
                            <p><p className="text-center info_usuario--cursos-5">{this.state.lista_cursos[5]==null?"":this.state.lista_cursos[5].nombre}</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>
                        <div className="card info_usuario--cursos-cuadro-art">
                            <p><p className="text-center info_usuario--cursos-6">{this.state.lista_cursos[9]==null?"":this.state.lista_cursos[9].nombre}</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>
                        <div className="card info_usuario--cursos-cuadro-leng">
                            <p><p className="text-center info_usuario--cursos-7">{this.state.lista_cursos[0]==null?"":this.state.lista_cursos[0].nombre}</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>
                        <div className="card info_usuario--cursos-cuadro-lite">
                            <p><p className="text-center info_usuario--cursos-8">{this.state.lista_cursos[1]==null?"":this.state.lista_cursos[1].nombre}</p></p>
                            <p className="info_usuario--cursos-enlace-final"><p className="text-center info_usuario--cursos-texto-enlace-final">Aprender desde cero</p></p>
                        </div>                                            
                    </div>
                </div>
                <div>
                    <div className="info_usuario--cursos-logros-flex-container-encabezado">
                        <h4>Logros</h4>
                        <p className="info_usuario--cursos-logros-enlace">Mis logros</p>
                    </div>
                    <div className="info_usuario--cursos-logros-flex-container">
                        <div className="card info_usuario--cursos-logros-cuadro-1">
                            <div className="info_usuario--cursos-logros-cuadro-flex">
                                <div>
                                    <h5 className="info_usuario--cursos-logros-titulo">Reto</h5>
                                    <p className="info_usuario--cursos-logros-fecha">25 Junio, 2019</p>
                                    <img className="info_usuario--cursos-logros-img" src="http://tutorio-bootstrap.frontendmatter.com/assets/images/illustration/achievement/128/white.png" alt="logro-cup"></img>
                                </div> 
                                <div>
                                    <h5 className="info_usuario--cursos-logros-titulo-curso">Ciencias Naturales</h5>
                                    <p className="info_usuario--cursos-logro-descripcion-curso">Conocimiento avanzando en Física y Química</p>
                                </div>
                                <div>
                                    <img className="info_usuario--cursos-logros-icono" src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/flinto_40x40@2x.png" alt="logro-curso"></img>
                                </div>
                            </div>
                        </div>
                        <div className="card info_usuario--cursos-logros-cuadro-2">
                            <div className="info_usuario--cursos-logros-cuadro-flex">
                                <div>
                                    <h5 className="info_usuario--cursos-logros-titulo">Reto</h5>
                                    <p className="info_usuario--cursos-logros-fecha">24 Junio, 2019</p>
                                    <img className="info_usuario--cursos-logros-img" src="http://tutorio-bootstrap.frontendmatter.com/assets/images/illustration/achievement/128/white.png" alt="logro-cup"></img>
                                </div> 
                                <div>
                                    <h5 className="info_usuario--cursos-logros-titulo-curso">Ciencias Sociales</h5>
                                    <p className="info_usuario--cursos-logro-descripcion-curso">Conocimiento avanzando Historia y Geografía</p>
                                </div>
                                <div>
                                    <img className="info_usuario--cursos-logros-icono" src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/angular_40x40@2x.png" alt="logro-curso"></img>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>  
            </div>
        )
    }
}