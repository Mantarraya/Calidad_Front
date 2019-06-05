import React from "react";

import './curso_user_body.css'

export default class CursoUserBody extends React.Component {

    render() {
        return (

            <div>

                <div className="curso_user_body--contenido">

                    <div className="curso_user_body-content-parrafo">
                        <p className="curso_user_body--parrafo"><b>Introducción</b> <br></br>
                            Aprenda una forma de crear aplicaciones con Angular   <br></br>
                            y reutilizar su código y sus capacidades para crear <br></br>
                            aplicaciones para cualquier destino de implementación.   <br></br>
                            Para web, web móvil, móvil nativo y escritorio nativo.</p>
                    </div>

                    <div className="curso_user_body--content-parrafo">
                        <p className="curso_user_body--parrafo"><b>¿Que aprenderas?</b> <br></br>
                            - Trigonometría <br></br>
                            - Geografía <br></br>
                            - Biología <br></br>
                            - Historia <br></br>
                        </p>
                    </div>

                </div>

                <div>
                    <div className="curso_user_body-flex-container">


                        <div className="curso_user_body--content-parrafo">
                            <p><h4><b>Princiante</b> </h4>
                                A lo largo del curso aprenderas lo básico

                            </p>
                        </div>

                    </div>


                    <div className="curso_user_body-2-flex-container">
                        <div className="card curso_user_body-cuadro-beginner1">
                            <p><p className="text-center curso_user_body-1">Trigonometría</p></p>
                            <p className="curso_user_body-enlace-final"><p className="text-center curso_user_body-texto-enlace-final">Primer tema</p></p>
                        </div>
                        <div className="card curso_user_body-cuadro-beginner2">
                            <p><p className="text-center curso_user_body-2">Geografía</p></p>
                            <p className="curso_user_body-enlace-final"><p className="text-center curso_user_body-texto-enlace-final">Primer tema</p></p>
                        </div>
                        <div className="card curso_user_body-cuadro-beginner3">
                            <p><p className="text-center curso_user_body-3">Biología</p></p>
                            <p className="curso_user_body-enlace-final"><p className="text-center curso_user_body-texto-enlace-final">Primer tema</p></p>
                        </div>
                        <div className="card curso_user_body-cuadro-beginner4">
                            <p><p className="text-center curso_user_body-4">Historia</p></p>
                            <p className="curso_user_body-enlace-final"><p className="text-center curso_user_body-texto-enlace-final">Primer tema</p></p>
                        </div>
                    </div>

                </div>


                <div>
                    <div className="curso_user_body-flex-container">


                        <div className="curso_user_body--content-parrafo">
                            <p><h4><b>Intermedio</b> </h4>
                                A lo largo del curso aprenderas nuevos temas con un nivel de dificultad mayor

                            </p>
                        </div>

                    </div>


                    <div className="curso_user_body-2-flex-container">
                        <div className="card curso_user_body-cuadro-beginner5">
                            <p><p className="text-center curso_user_body-5">Trigonometría</p></p>
                            <p className="curso_user_body-enlace-final"><p className="text-center curso_user_body-texto-enlace-final">Segundo tema</p></p>
                        </div>
                        <div className="card curso_user_body-cuadro-beginner6">
                            <p><p className="text-center curso_user_body-6">Geografía</p></p>
                            <p className="curso_user_body-enlace-final"><p className="text-center curso_user_body-texto-enlace-final">Segundo tema</p></p>
                        </div>
                        <div className="card curso_user_body-cuadro-beginner7">
                            <p><p className="text-center curso_user_body-7">Biología</p></p>
                            <p className="curso_user_body-enlace-final"><p className="text-center curso_user_body-texto-enlace-final">Segundo tema</p></p>
                        </div>
                        <div className="card curso_user_body-cuadro-beginner8">
                            <p><p className="text-center curso_user_body-8">Historia</p></p>
                            <p className="curso_user_body-enlace-final"><p className="text-center curso_user_body-texto-enlace-final">Segundo tema</p></p>
                        </div>
                    </div>

                </div>

                <br></br>
                <br></br>

            </div>
        )
    }
}