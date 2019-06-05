import React from "react";
import './perfil_user.css'


export default class PerfilUser extends React.Component {


    constructor(props){
        super(props)

        this.state={
            nombres:'',
            apellidos:'',
            email:''
        }
    }

    componentDidMount(e){
        var parent=this
        fetch("https://back-calidad.herokuapp.com/api/alumno/"+localStorage.getItem('mytoken'))
        .then(function (response){ 
            return response.json();
        })
        .then(function (data){
            console.log(data)
            parent.setState({
                nombres:data.firstname,
                apellidos:data.lastname,
                email:data.email
            })
            
        }).catch(function (err){
            console.log(err)
        })
    }

    render() {
        return (

            <div className="container info_usuario--perfil_user">
                <table class="table info_usuario--perfil_user_table">

                    <tr>
                        <td> <strong> Nombres: </strong></td>
                        <td> {this.state.nombres==null?"":this.state.nombres} </td> </tr> <tr>
                        <td> <strong> Apellidos: </strong></td>
                        <td>  {this.state.apellidos==null?"":this.state.apellidos} </td> </tr>


                    <tr>
                        <td> <strong> Correo electrónico: </strong></td>
                        <td> <p>  {this.state.email==null?"":this.state.email} </p></td>
                    </tr>

                </table>

            </div>
        );
    }
}