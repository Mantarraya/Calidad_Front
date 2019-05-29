import React from "react";

import "./cursos.css";

export default class Cursos extends React.Component{

    constructor(props){
        super(props)
        this.state={
            lista_cursos:[]
        }
    }

    componentWillMount() {
        fetch('https://back-calidad.herokuapp.com/api/curso/obtenerCursos?fbclid=IwAR1mxVVyyd0-DeCUbPa6wClITt3VyjSpOFavK6foX_VaLx_cyB_fLRbRn3U')
            .then((response)=>{
                return response.json();
            })
            .then(lista_cursos=>{
                this.setState({
                    lista_cursos:lista_cursos
                })
            })
    }

    render(){
        console.log(this.state.lista_cursos[0])
        return(
            <div className="cursos--contendor_cursos">
                <div className="cursos--grupo_cuadros">
                    <div className="cursos--cuadro_curso"></div>
                    <div className="cursos--cuadro_curso">holaaaa</div>
                    <div className="cursos--cuadro_curso"></div>
                </div>
                <div className="cursos--grupo_cuadros">
                    <div className="cursos--cuadro_curso"></div>
                    <div className="cursos--cuadro_curso"></div>
                    <div className="cursos--cuadro_curso"></div>
                </div>
                <div className="cursos--grupo_cuadros">
                    <div className="cursos--cuadro_curso"></div>
                    <div className="cursos--cuadro_curso"></div>
                    <div className="cursos--cuadro_curso"></div>
                </div>
            </div>
        )
    }
}