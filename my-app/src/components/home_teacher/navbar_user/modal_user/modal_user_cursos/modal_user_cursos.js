import React from "react";

import { withRouter } from "react-router-dom";

import './modal_user_cursos.css'

class ModalUserCursos extends React.Component{

    constructor(props){
        super(props)
        this.state={
            lista_cursos:[]
        }
        this.mostrarVentanaCurso=this.mostrarVentanaCurso.bind(this);
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

    mostrarVentanaCurso(e){
        //this.props.history.push('/home_user/curso/1')
        e.preventDefault();        
    }

    render(){
        return(
            <div className="modal_user_cursos--cuadro_lista">
                <p>Cursos</p>
                <div className="modal_user_cursos--cuadro_lista_opciones">
                    <div onClick={this.mostrarVentanaCurso}>
                        {this.state.lista_cursos[3]==null?"":this.state.lista_cursos[3].nombre}
                    </div>
                    <div onClick={this.mostrarVentanaCurso}>
                        {this.state.lista_cursos[5]==null?"":this.state.lista_cursos[5].nombre}
                    </div>
                    <div onClick={this.mostrarVentanaCurso}>
                        {this.state.lista_cursos[6]==null?"":this.state.lista_cursos[6].nombre}
                    </div>
                    <div onClick={this.mostrarVentanaCurso}>
                        {this.state.lista_cursos[7]==null?"":this.state.lista_cursos[7].nombre}
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