import React from "react";
import './student.css'

export default class Alumno extends React.Component {

    render() {
        return (
            <div className="alumno--contenido">

                <h1>Alumnos</h1>
                <hr className="alumno--hr"></hr>
                <br></br>

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"> Buscar alumnos </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Busqueda de alumnos</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <form>

                                    <div className="form-group row">
                                        <label className="col-md-4">Nombres:</label>
                                        <div className="col-md-6">
                                            <input type="text" name="nombres"></input>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-md-4">Apellidos:</label>
                                        <div className="col-md-6">
                                            <input type="text" name="apellidos"></input>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-md-4">Distrito:</label>
                                        <div className="col-md-6">
                                            <input type="text" name="distrito"></input>
                                        </div>
                                    </div>
                                </form>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary">Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>


                <br></br>
                <br></br>

                <div className="alumno--tabla">

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombres</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Distrito</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Luis</td>
                                <td>Huayta</td>
                                <td>Santa Anita</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Gustavo</td>
                                <td>Pezo</td>
                                <td>Cercado de Lima</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Cristian</td>
                                <td>Cornejo</td>
                                <td>Callao</td>
                            </tr>
                        </tbody>
                    </table>


                </div>





            </div>
        )
    }
}