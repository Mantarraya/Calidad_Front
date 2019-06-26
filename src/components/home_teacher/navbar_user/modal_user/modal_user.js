import React from "react";

import ModalUserCursos from "./modal_user_cursos/modal_user_cursos";

import './modal_user.css'

export default class ModalUser extends React.Component{

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
        return(
            <div>
                <div className="row">
                    <div className="col-4">
                        <ul className="list-group">
                            <li className="list-group-item">El aprendizaje es como un camino</li>
                            <li className="list-group-item">Valora el camino</li>
                            <li className="list-group-item">Respeta el camino</li>
                            <li className="list-group-item">Llegarás a la meta</li>
                            <li className="list-group-item">FazTeach te ayudará</li>
                        </ul>
                    </div>
                    <div className="col-5">
                      <ModalUserCursos/>  
                    </div>
                    <div className="col-3">
                        <p>Ruta de Aprendizaje</p>
                        <div className="row modal_user--ruta_aprendizaje">
                            <div className="col-4  modal_user--ruta_aprendizaje_imagen-arit"></div>
                            <div className="col-8  modal_user--ruta_aprendizaje_contenido">{this.state.lista_cursos[1]==null?"":this.state.lista_cursos[1].nombre}</div>
                        </div>
                        <div className="row modal_user--ruta_aprendizaje">
                            <div className="col-4  modal_user--ruta_aprendizaje_imagen-alg"></div>
                            <div className="col-8  modal_user--ruta_aprendizaje_contenido">{this.state.lista_cursos[0]==null?"":this.state.lista_cursos[0].nombre}</div>
                        </div>
                        <div className="row modal_user--ruta_aprendizaje">
                            <div className="col-4  modal_user--ruta_aprendizaje_imagen-geom"></div>
                            <div className="col-8  modal_user--ruta_aprendizaje_contenido">{this.state.lista_cursos[2]==null?"":this.state.lista_cursos[2].nombre}</div>
                        </div>
                        <div className="row modal_user--ruta_aprendizaje">
                            <div className="col-4  modal_user--ruta_aprendizaje_imagen-fis"></div>
                            <div className="col-8  modal_user--ruta_aprendizaje_contenido">{this.state.lista_cursos[4]==null?"":this.state.lista_cursos[4].nombre}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}