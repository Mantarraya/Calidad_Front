import React from "react";
import './statistic.css'

export default class Estadistica extends React.Component {

    render() {
        return (
            <div className="estadistica--contenido">

                <h1>Estadisticas</h1>
                <hr className="estadistica--hr"></hr>

                <a>Seleccionar curso:   &nbsp; &nbsp; &nbsp; </a>
                <div className="btn-group dropright">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Curso </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#"> Trigonometría 1</a>
                        <a className="dropdown-item" href="#"> Algebra</a>
                        <a className="dropdown-item" href="#"> Geometría</a>
                    </div>
                </div>

                <br></br>
                <br></br>
                <br></br>

                <div className="row">
                    <div className="col-6">
                        <div className="estadistica--grafica1">

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="estadistica--grafica2">

                        </div>
                        <div className="estadistica--grafica3">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}