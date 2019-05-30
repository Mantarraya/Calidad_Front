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
            <div className="cursos--contendor_cursos">
                <div className="cursos--grupo_cuadros">
                    <div className="cursos--cuadro_curso">Algebra</div>
                    <div className="cursos--cuadro_curso">Aritmetica</div>
                    <div className="cursos--cuadro_curso">Geometria</div>
                </div>
                <div className="cursos--grupo_cuadros">
                    <div className="cursos--cuadro_curso">Trigonometria</div>
                    <div className="cursos--cuadro_curso">Fisica</div>
                    <div className="cursos--cuadro_curso">Quimica</div>
                </div>
                <div className="cursos--grupo_cuadros">
                    <div className="cursos--cuadro_curso">Biologia</div>
                    <div className="cursos--cuadro_curso">Historia</div>
                    <div className="cursos--cuadro_curso">Geografia</div>
                </div>
            </div>
        )
    }
}