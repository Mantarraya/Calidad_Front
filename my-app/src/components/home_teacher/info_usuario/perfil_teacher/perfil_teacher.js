import React from "react";
import './perfil_teacher.css'


export default class PerfilTeacher extends React.Component {


    constructor(props){
        super(props)
    }

    render() {
        return (

            <div className="container info_usuario--perfil_user">
                <div>
                    <h2>Mensajes <i class="fas fa-comments"></i> </h2>
                </div>
                <div className="info_usuario-home-teacher">
                    <div className="info_usuario-home_teacher-hijo_1">
                        <div className="info_usuario-home_teacher--cont-chat">
                            <div className="info_usuario-home_teacher--cont-img">
                                
                            </div>
                            <div className="info_usuario-home_teacher--cont-chat-info">
                                <div className="info_usuario-home_teacher--cont-chat-user">
                                    <h5 className="info_usuario-home_teacher--cont-chat-user-name">Alumno_1</h5>
                                    <span className="info_usuario-home_teacher--cont-chat-fecha">9 Jun</span>
                                </div>
                                <p className="info_usuario-home_teacher--cont-chat-msg">Buenas noches profesor, le escribo porque estoy interesado en que me dicte clases.</p>
                            </div>
                        </div>
                        <div className="info_usuario-home_teacher--cont-chat">
                            <div className="info_usuario-home_teacher--cont-img">
                                
                            </div>
                            <div className="info_usuario-home_teacher--cont-chat-info">
                                <div className="info_usuario-home_teacher--cont-chat-user">
                                    <h5 className="info_usuario-home_teacher--cont-chat-user-name">Alumno_2</h5>
                                    <span className="info_usuario-home_teacher--cont-chat-fecha">9 Jun</span>
                                </div>
                                <p className="info_usuario-home_teacher--cont-chat-msg">Buenas noches profesor, le escribo porque estoy interesado en que me dicte clases.</p>
                            </div>
                        </div>
                        <div className="info_usuario-home_teacher--cont-chat">
                            <div className="info_usuario-home_teacher--cont-img">
                                
                            </div>
                            <div className="info_usuario-home_teacher--cont-chat-info">
                                <div className="info_usuario-home_teacher--cont-chat-user">
                                    <h5 className="info_usuario-home_teacher--cont-chat-user-name">Alumno_3</h5>
                                    <span className="info_usuario-home_teacher--cont-chat-fecha">9 Jun</span>
                                </div>
                                <p className="info_usuario-home_teacher--cont-chat-msg">Buenas noches profesor, le escribo porque estoy interesado en que me dicte clases.</p>
                            </div>
                        </div>
                    </div>
                    <div className="info_usuario-home_teacher-hijo_2">
                        <div className="info_usuario-home_teacher-conversation-1">
                            <div className="info_usuario-home_teacher--cont-img-1"></div>
                            <div className="card info_usuario-home_teacher--cont-conversation-1">
                                <p className="info_usuario-home_teacher--cont-conversation-msg-1">Buenas noches profesor, le escribo porque estoy interesado en que me dicte clases.</p>
                                <span className="info_usuario-home_teacher--cont-conversation-msg-date">01:07 pm | 09 Jun</span>
                            </div>
                        </div>
                        <div className="info_usuario-home_teacher-conversation-2">
                            <div className="card info_usuario-home_teacher--cont-conversation-2">
                                <p className="info_usuario-home_teacher--cont-conversation-msg-2">Buenas noches alumno, perfecto. Realice el pago y me dirijo a su casa.</p>
                                <span className="info_usuario-home_teacher--cont-conversation-msg-date">01:08 pm | 09 Jun</span>
                            </div>
                        </div>
                        <div className="info_usuario-home_teacher-conversation-1">
                            <div className="info_usuario-home_teacher--cont-img-1"></div>
                            <div className="card info_usuario-home_teacher--cont-conversation-1">
                                <p className="info_usuario-home_teacher--cont-conversation-msg-1">De acuerdo profesor, en un instante estaré realizando el pago.</p>
                                <span className="info_usuario-home_teacher--cont-conversation-msg-date">01:09 pm | 09 Jun</span>
                            </div>
                        </div>
                        <div className="info_usuario-home_teacher-conversation-2">
                            <div className="card info_usuario-home_teacher--cont-conversation-2">
                                <p className="info_usuario-home_teacher--cont-conversation-msg-2">Entiendo alumno, inmediatamente verifique el pago me dirijo a su casa.</p>
                                <span className="info_usuario-home_teacher--cont-conversation-msg-date">01:10 pm | 09 Jun</span>
                            </div>
                        </div>
                        <div className="info_usuario-home_teacher--content-input">
                            <input className="info_usuario-home_teacher--input" type="text" placeholder="Escribir mensaje..."></input><i className="far fa-paper-plane info_usuario-home_teacher--btn_enviar"></i>
                            <button type="button" class="btn btn-success btn-ver-pago">Ver Pago</button>
                        </div>                       
                    </div>
                </div>            
            </div>
        );
    }
}