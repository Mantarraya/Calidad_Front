import React from "react";

import ModalUserCursos from "./modal_user_cursos/modal_user_cursos";

import './modal_user.css'

export default class ModalUser extends React.Component{


    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-4">
                        <ul className="list-group">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                    <div className="col-5">
                      <ModalUserCursos/>  
                    </div>
                    <div className="col-3">
                        <p>Ruta de Aprendizaje</p>
                        <div className="row modal_user--ruta_aprendizaje">
                            <div className="col-4  modal_user--ruta_aprendizaje_imagen"></div>
                            <div className="col-8  modal_user--ruta_aprendizaje_contenido">Angular 24 Cursos</div>
                        </div>
                        <div className="row modal_user--ruta_aprendizaje">
                            <div className="col-4  modal_user--ruta_aprendizaje_imagen"></div>
                            <div className="col-8  modal_user--ruta_aprendizaje_contenido">Angular 24 Cursos</div>
                        </div>
                        <div className="row modal_user--ruta_aprendizaje">
                            <div className="col-4  modal_user--ruta_aprendizaje_imagen"></div>
                            <div className="col-8  modal_user--ruta_aprendizaje_contenido">Angular 24 Cursos</div>
                        </div>
                        <div className="row modal_user--ruta_aprendizaje">
                            <div className="col-4  modal_user--ruta_aprendizaje_imagen"></div>
                            <div className="col-8  modal_user--ruta_aprendizaje_contenido">Angular 24 Cursos</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}