import React from "react";

import "./alumnos_reportados.css";

export default class AlumnosReportados extends React.Component{

    constructor(props){
        super(props) 
    }

    render(){
        console.log()
        return(
            <div className="container info_usuario--cursos">
                <div>
                    <h2>Alumnos Reportados <i class="far fa-address-book"></i></h2>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">Número</th>
                                <th scope="col" className="text-center">Nombre</th>
                                <th scope="col" className="text-center">Apellidos</th>
                                <th scope="col" className="text-center">Fecha</th>
                                <th scope="col" className="text-center">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-center">1</th>
                                <td className="text-center">Gustavo</td>
                                <td className="text-center">Pezo</td>
                                <td className="text-center">13/06/2019</td>
                                <td className="text-center"><button type="button" class="btn btn-outline-primary">Desbloquear</button></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">2</th>
                                <td className="text-center">Cristian</td>
                                <td className="text-center">Cornejo</td>
                                <td className="text-center">13/06/2019</td>
                                <td className="text-center"><button type="button" class="btn btn-outline-primary">Desbloquear</button></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">3</th>
                                <td className="text-center">Luis</td>
                                <td className="text-center">Huayta</td>
                                <td className="text-center">14/06/2019</td>
                                <td className="text-center"><button type="button" class="btn btn-outline-primary">Desbloquear</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}