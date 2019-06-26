import React from "react";

import CursoUserHeader from "./curso_user_header/curso_user_header";
import CursoUserBody from "./curso_user_body/curso_user_body";
import Footer from "../../footer/footer";

import './curso_user.css'

export default class CursoUser extends React.Component{

    constructor(props){
        super(props)
        this.state={
            cursoId:this.props.match.params.cursoId
        }
    }

    

    render(){
        return(
            <div>
                <CursoUserHeader/>
                <CursoUserBody/>
                <Footer/>   
            </div>
        )
    }
}