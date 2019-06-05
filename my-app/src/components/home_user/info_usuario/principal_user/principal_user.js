import React from "react";

import Grafico1 from "./graficos/grafico1";
import Grafico2 from "./graficos/grafico2";
import Grafico3 from "./graficos/grafico3";
import './principal_user.css'

export default class PrincipalUser extends React.Component{

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
                <div className="row">
                    <div className="col-6 info_usuario--principal_user_canvas">
                        <div className="info_usuario--principal_user_grafica1">
                            <Grafico1 chartData={this.state.chartData} legendPosition="bottom"/> 
                            <div className="tercer_grafico">
                                <Grafico2 chartData={this.state.chartData} legendPosition="bottom"/>                           
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="info_usuario--principal_user_grafica2">
                            <Grafico2 chartData={this.state.chartData} legendPosition="bottom"/>
                        </div>
                        <div className="info_usuario--principal_user_grafica3">
                            <Grafico3 chartData={this.state.chartData} legendPosition="bottom"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}