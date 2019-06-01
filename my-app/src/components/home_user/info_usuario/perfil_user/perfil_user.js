import React from "react";
import './perfil_user.css'


export default class PerfilUser extends React.Component {
    render() {
        return (

            <div className="container info_usuario--perfil_user">
                <table class="table info_usuario--perfil_user_table">

                    <tr>
                        <td> <strong> Nombres: </strong></td>
                        <td> Luis </td> </tr> <tr>
                        <td> <strong> Apellidos: </strong></td>
                        <td> Huayta </td> </tr>


                    <tr>
                        <td> <strong> Rol: </strong></td>
                        <td> Alumno / Backend. </td> </tr> <tr>
                        <td> <strong> Dirección: </strong></td>
                        <td> Santa Anita </td> </tr> <tr>
                        <td> <strong> Correo electrónico: </strong></td>
                        <td> <a href="mailto:info@support.com"> luis.huayta @email - fake.com </a></td>
                    </tr>

                    <tr>
                        <td> <strong> Teléfono: </strong></td>
                        <td> 987654321 </td> </tr>

                    <tr>

                        <td> <strong> Género: </strong></td>
                        <td> Hombre </td> </tr> <tr>
                        <td> <strong> Hobbies: </strong></td>
                        <td> Pinturillo, Overwatch </td> </tr> <tr>
                        <td> <strong> Habilidades: </strong></td>
                        <td>
                            <span class="tags"> React </span> <span class="tags"> MongoDB </span> <span class="tags"> Calidad </span> <span class="tags"> Gaaaa </span> </td> </tr>



                </table>

                <div class="col-xs-12 divider text-center">

                    <br></br> <br></br>

                    <div class="col-xs-12 col-sm-4 info_usuario--perfil_user_emphasis">
                        <h2> <strong> 10 </strong></h2>
                        <p> <small> Asignaturas </small></p>
                        <button class="btn btn-success btn-block"> <span class="fa fa-plus-circle"> </span> Cursos matrículados </button>
                    </div>


                    <div class="col-xs-12 col-sm-4 info_usuario--perfil_user_emphasis">
                        <h2> <strong> 4 </strong></h2>
                        <p> <small> Profesores </small></p>
                        <button class="btn btn-info btn-block"> <span class="fa fa-user"> </span> Profesores contratados </button>
                    </div>


                </div>

            </div>
        );
    }
}