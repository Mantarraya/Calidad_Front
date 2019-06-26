import React from "react";
import './reporter_user.css'

export default class ReportarUsuario extends React.Component {

    render() {
        return (
            <div className="reportar_usuario--contenido">

                <h1>Usuarios reportados</h1>

                <hr className="reportar_usuario--hr"></hr>

                <p>Lista de usuarios reportados</p>

                <div className="reportar_usuario--tabla">
                    <div className="row col-md-6 col-md-offset-2 custyle">
                        <table className="table table-striped reportar_usuario--custab">
                            <thead>
                                <tr>
                                    <th>Numero</th>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Rol</th>
                                    <th >Fecha</th>
                                    <th className="text-center">Acción</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>1</td>
                                <td>Luis</td>
                                <td>Huayta</td>
                                <td>Profesor</td>
                                <td>13/06/2019</td>
                                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Desbloquear</a> </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Gustavo</td>
                                <td>Pezo</td>
                                <td>Alumno</td>
                                <td>13/06/2019</td>
                                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Desbloquear</a> </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Luis</td>
                                <td>Huayta</td>
                                <td>Profesor</td>
                                <td>13/06/2019</td>
                                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Desbloquear</a> </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Gustavo</td>
                                <td>Pezo</td>
                                <td>Alumno</td>
                                <td>13/06/2019</td>
                                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Desbloquear</a> </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Luis</td>
                                <td>Huayta</td>
                                <td>Profesor</td>
                                <td>13/06/2019</td>
                                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Desbloquear</a> </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Gustavo</td>
                                <td>Pezo</td>
                                <td>Alumno</td>
                                <td>13/06/2019</td>
                                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Desbloquear</a> </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Luis</td>
                                <td>Huayta</td>
                                <td>Profesor</td>
                                <td>13/06/2019</td>
                                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Desbloquear</a> </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Gustavo</td>
                                <td>Pezo</td>
                                <td>Alumno</td>
                                <td>13/06/2019</td>
                                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Desbloquear</a> </td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Luis</td>
                                <td>Huayta</td>
                                <td>Profesor</td>
                                <td>13/06/2019</td>
                                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Desbloquear</a> </td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Gustavo</td>
                                <td>Pezo</td>
                                <td>Alumno</td>
                                <td >13/06/2019</td>
                                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Desbloquear</a> </td>
                            </tr><tr>
                                <td>11</td>
                                <td>Luis</td>
                                <td>Huayta</td>
                                <td>Profesor</td>
                                <td>13/06/2019</td>
                                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Desbloquear</a> </td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Gustavo</td>
                                <td>Pezo</td>
                                <td>Alumno</td>
                                <td>13/06/2019</td>
                                <td className="text-center"><a className='btn btn-info btn-xs' href="#">Desbloquear</a> </td>
                            </tr>
                            
                        </table>
                    </div>
                </div>



            </div>
        )
    }
}