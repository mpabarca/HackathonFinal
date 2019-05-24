import React, {Component} from 'react';
import './signin.css';
import {Container, Row, Col, Button, Image } from 'react-bootstrap';
import profileCompany from '../img/profile-company.png';

const Signin = (props) =>{

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
                <Col xs="5" id="col-tittle">
                    <Row className="tittle">Nombre</Row>
                    <Row className="tittle">Correo</Row>
                    <Row className="tittle">Clave</Row>
                    <Row className="tittle">Emprendimiento</Row>
                    <Row className="tittle">Web</Row>
                    <Row id="materiales">Material Reutilizable</Row>
                </Col>
                <Col xs="5" id="col-name">
                    <Row className="input"> Sofía Tala</Row>
                    <Row className="input">sofia.t@gmail.com</Row>
                    <Row className="input"><i class="fas fa-ellipsis-h"></i><i class="fas fa-ellipsis-h"></i></Row>
                    <Row className="input"> Folk</Row>
                    <Row className="input"> folk.handmade.cl</Row>
                    <Row id="icon-material">
                        <img  className="icon-signin" src="https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/tela-letra.png" />
                        <img  className="icon-signin" src="https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/papel-letra.png" />
                    </Row>
                </Col>
            </Row>
            <Row id="button-profile"><Button variant="outline-primary" value="signin-check" onClick={props.onClick}>REGISTRAR</Button></Row>
        </div>
    )
}


export default Signin;