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
                Aca va los cursos
            </div>
        )
    }
}