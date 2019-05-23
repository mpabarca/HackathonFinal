import React, {Component} from 'react';
import './signin.css';
import {Container, Row, Col, Button, Image } from 'react-bootstrap';
import profileCompany from '../img/profile-company.png';

class Signin extends Component{

    render(){
        return(
            <div id="container">
                <Row id="row-profile">
                    <Image id="signin-profile" src={profileCompany} roundedCircle />
                </Row>
                <Row id="row-form">
                    <Col xs="2" id="col-icon">
                        <Row className="icon"><i class="far fa-user"></i></Row>
                        <Row className="icon"><i class="far fa-envelope"></i></Row>
                        <Row className="icon"><i class="fas fa-lock"></i></Row>
                        <Row className="icon"><i class="far fa-lightbulb"></i></Row>
                        <Row className="icon"><i class="fas fa-globe-americas"></i></Row>
                    </Col>
                    <Col id="col-tittle">
                        <Row className="tittle">Nombre</Row>
                        <Row className="tittle">Correo</Row>
                        <Row className="tittle">Clave</Row>
                        <Row className="tittle">Emprendimiento</Row>
                        <Row className="tittle">Web</Row>
                        <Row id="materiales">Material Reutilizable</Row>
                    </Col>
                    <Col id="col-name">
                        <Row className="input"> Sofía Tala</Row>
                        <Row className="input">sofia.t@gmail.com</Row>
                        <Row className="input"><i class="fas fa-ellipsis-h"></i><i class="fas fa-ellipsis-h"></i></Row>
                        <Row className="input"> Minka</Row>
                        <Row className="input"> Minkaccesorios</Row>
                        <Row id="icon-material"><i class="far fa-user"></i><i class="far fa-user"></i></Row>
                    </Col>
                </Row>
                <Row id="button-profile"><Button variant="outline-primary">REGISTRAR</Button></Row>
            </div>
        )
    }
}

export default Signin;