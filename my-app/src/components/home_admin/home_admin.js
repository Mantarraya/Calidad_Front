import React, { Component } from "react";
import Footer from "../footer/footer"
import './home_admin.css'
import NavbarAdmin from "./navbar_admin/navbar_admin";

class HomeAdmin extends Component {




    constructor(props) {
        super(props)
        this.haciendoClick = this.haciendoClick.bind(this)
    }

    haciendoClick(e) {
        alert("Hello")
    }

    reporterUser(e) {
        e.preventDefault();
        this.setState({
            valor: 0
        })
        e.preventDefault();
    }

    render() {

        return (

            <div>
            <NavbarAdmin/>
            </div>
        );
    }
}

export default HomeAdmin;