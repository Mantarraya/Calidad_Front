import React from "react";

import './principal_teacher.css'

export default class PrincipalTeacher extends React.Component{

    constructor(){
        super();
        this.state = {
          chartData:{}
        }
    }

    componentWillMount(){
        this.getChartData();
    }

    getChartData(){
        // Ajax calls here
        this.setState({
            chartData:{
            labels: ['Matematica', 'Ciencias Naturales', 'Ciencias Sociales'],
            datasets:[
                {
                label:'Areas',
                data:[
                    0.5,
                    0.5,
                    0.5
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ]
                }
            ]
            }
        });
    }



    render(){
        return(
            <div className="container info_usuario--principal_user">
                <div>
                    <h2><i class="fas fa-bell"></i> Notificaciones (3)</h2>
                </div>
                <div>
                    <div className="home_teacher--notificacion">
                        <div className="card border-info mb-3" >
                            <div className="card-header bg-transparent border-info home_teacher--title-notification"><i class="fas fa-exclamation-circle"></i> Notificación de Alumno_1</div>
                            <div className="card-body text-ligth">
                                <h5 className="card-title">Deseo contar con sus servicios</h5>
                                <p className="card-text">Estimado profesor deseo tener clases particulares con usted para el curso de Trigonometría</p>
                            </div>
                            <div className="card-footer bg-transparent border-info">
                                <button type="button" class="btn btn-success home_teacher--btn_aceptar">Aceptar</button>
                                <button type="button" class="btn btn-danger home_teacher--btn_denegar">Denegar</button>
                            </div>
                        </div>
                        <div className="card border-info mb-3" >
                            <div className="card-header bg-transparent border-info home_teacher--title-notification"><i class="fas fa-exclamation-circle"></i> Notificación de Alumno_2</div>
                            <div className="card-body text-ligth">
                                <h5 className="card-title">Deseo contar con sus servicios</h5>
                                <p className="card-text">Estimado profesor deseo tener clases particulares con usted para el curso de Álgebra</p>
                            </div>
                            <div className="card-footer bg-transparent border-info">
                                <button type="button" class="btn btn-success home_teacher--btn_aceptar">Aceptar</button>
                                <button type="button" class="btn btn-danger home_teacher--btn_denegar">Denegar</button>
                            </div>
                        </div>
                        <div className="card border-info mb-3" >
                            <div className="card-header bg-transparent border-info home_teacher--title-notification"><i class="fas fa-exclamation-circle"></i> Notificación de Alumno_3</div>
                            <div className="card-body text-ligth">
                                <h5 className="card-title">Deseo contar con sus servicios</h5>
                                <p className="card-text">Estimado profesor deseo tener clases particulares con usted para el curso de Geometría</p>
                            </div>
                            <div className="card-footer bg-transparent border-info">
                                <button type="button" class="btn btn-success home_teacher--btn_aceptar">Aceptar</button>
                                <button type="button" class="btn btn-danger home_teacher--btn_denegar">Denegar</button>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        );
    }
}