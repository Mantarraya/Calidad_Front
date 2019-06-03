import React from "react";

import './curso_user_header.css'

export default class CursoUserHeader extends React.Component{

    render(){
        return(
            <div className="curso_user_header--contenido">
                <div>
                    <div className="curso_user_header--content-titulo">
                        <h1 className="curso_user_header--titulo"><b>Aprender Angular</b></h1>
                    </div>
                    <div className="curso_user_header--content-parrafo">
                        <p className="curso_user_header--parrafo">No es todos los días que una de las bibliotecas de aplicaciones para <br></br>
                           usuario más importantes en el desarrollo web recibe una revisión <br></br> 
                           completa. Mantenga sus habilidades relevantes y actualizadas con <br></br> 
                           esta introducción integral al popular proyecto comunitario de Google.</p>
                    </div>
                    <div className="card curso_user_header--content-btn">
                        <p className="curso_user_header--btn">Empezar</p>
                    </div>
                </div>
                <div className="card curso_user_header--content-img">
                    <img src="http://tutorio-bootstrap.frontendmatter.com/assets/images/paths/angular_40x40@2x.png"></img>

                </div>
            </div>
        )
    }
}