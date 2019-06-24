import React from "react";
import './perfil_user.css'


export default class PerfilUser extends React.Component {


    constructor(props){
        super(props)

        this.state={
            nombres:'',
            apellidos:'',
            email:'',
            rol:'',
            genero:'',
            edad:''
        }
    }

    componentDidMount(e){
        var parent=this
        fetch("https://api-calida.herokuapp.com/api/alumno/"+localStorage.getItem('mytoken'))
        .then(function (response){ 
            return response.json();
        })
        .then(function (data){
            console.log(data)
            parent.setState({
                nombres:data.firstname,
                apellidos:data.lastname,
                email:data.email,
                rol:data.usuario,
                genero:data.genero,
                edad: data.edad
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

                    <tr>
                        <td> <strong> Rol: </strong></td>
                        <td> <p>  {this.state.rol==null?"":this.state.rol} </p></td>
                    </tr>

                    <tr>
                        <td> <strong> Género: </strong></td>
                        <td> <p>  {this.state.genero==null?"":this.state.genero} </p></td>
                    </tr>

                    <tr>
                        <td> <strong> Edad: </strong></td>
                        <td> <p>  {this.state.edad==null?"":this.state.edad} </p></td>
                    </tr>

                </table>

            </div>
        );
    }
}