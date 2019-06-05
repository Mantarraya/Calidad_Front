import React from "react";

import { withRouter } from "react-router-dom";

import './modal_user_cursos.css'

class ModalUserCursos extends React.Component{

    constructor(props){
        super(props)
        this.mostrarVentanaCurso=this.mostrarVentanaCurso.bind(this)
    }


    mostrarVentanaCurso(e){
        this.props.history.push('/home_user/curso/1')
        e.preventDefault();        
    }

    render(){
        return(
            <div className="modal_user_cursos--cuadro_lista">
                <p>Cursos</p>
                <div className="modal_user_cursos--cuadro_lista_opciones">
                    <div onClick={this.mostrarVentanaCurso}>
                        Camara
                    </div>
                    <div onClick={this.mostrarVentanaCurso}>
                        Raw Processing
                    </div>
                    <div onClick={this.mostrarVentanaCurso}>
                        Masking
                    </div>
                    <div onClick={this.mostrarVentanaCurso}>
                        Compositiog
                    </div>
                </div>
                <div className="row">
                            <div className="col-lg-12">
                                <button className="btn btn-secondary btn-block modal_user_cursos--cuadro_btn_ver_mas">Ver mas</button>
                            </div>
                    </div>
            </div>
        );
    }
}

export default withRouter(ModalUserCursos)