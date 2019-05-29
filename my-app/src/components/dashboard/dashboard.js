import React,{ Component } from "react";

import NavBar from "../navbar/navbar";
import './dashboard.css';


class Dashboard extends Component{

    render(){
        return(
            <div>
                <NavBar/>
                <div className="dashboard--principal--contenedor_home">
                    <div className="dashboard--principal--parallax1">
                        <div className="dashboard--principal--contenido_portada">
                            <p className="dashboard--principal--frase">Una frase identificadora</p>
                            <p className="dashboard--principal--descripcion">
                                Aca se describe todo lo que hace la aplicacion y que soluciones ofrece
                            </p>
                        </div>
                    </div>

                    <div className="dashboard--principal--contenido">
                        <div className="dashboard--principal--servicio">
                            <div className="dashboard--principal--cua1">
                                <p>Area de <br/> Practicas</p>
                            </div>
                            <div className="dashboard--principal--cua2">
                                <ul>
                                    <li>
                                        <b>Tipo1</b>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio?</p>
                                    </li>
                                    <li>
                                        <b>Tipo1</b>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio?</p>
                                    </li>
                                    <li>
                                        <b>Tipo1</b>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio?</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="dashboard--principal--cua3">
                                <ul>
                                    <li>
                                        <b>Tipo1</b>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio?</p>
                                    </li>
                                    <li>
                                        <b>Tipo1</b>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio?</p>
                                    </li>
                                    <li>
                                        <b>Tipo1</b>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio?</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="dashboard--principal--vision">
                                <p className="dashboard--principal--titulo_vision"> <b>NUESTRA</b> VISION</p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo repellat cumque. Cum obcaecati sit eligendi excepturi accusantium dignissimos adipisci tempore distinctio alias ad culpa est quia, pariatur harum veritatis?
                                <br/><br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo repellat cumque. Cum obcaecati sit eligendi excepturi accusantium dignissimos adipisci tempore distinctio alias ad culpa est quia, pariatur harum veritatis?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo repellat cumque. Cum obcaecati sit eligendi excepturi accusantium dignissimos adipisci tempore distinctio alias ad culpa est quia, pariatur harum veritatis?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo repellat cumque. Cum obcaecati sit eligendi excepturi accusantium dignissimos adipisci tempore distinctio alias ad culpa est quia, pariatur harum veritatis?
                                <br/><br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste inventore officia ea impedit dolore praesentium. Reprehenderit quisquam tempora consequuntur eum modi, porro voluptas doloribus, fuga et deserunt animi blanditiis! Saepe accusamus unde sunt esse maiores laboriosam praesentium vero excepturi necessitatibus!
                        </div>
                    </div>
                    
                    <div className="dashboard--principal--parallax2"></div>


                    <p className="dashboard--principal--titulo_creadores">
                            <b>NUESTROS</b> REPRESENTANTES
                        </p>
                    <div className="dashboard--principal--creadores">
                        <div className="dashboard--principal--persona"></div>
                        
                        <div className="dashboard--principal--persona1"></div>
                        <div className="dashboard--principal--persona2"></div>
                        <div className="dashboard--principal--persona3"></div>
                        <div className="dashboard--principal--persona"></div>
                    </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;