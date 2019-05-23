import React, {Component} from 'react';
import './companyprofile.css';
import {Container, Row, Col, Button, Image } from 'react-bootstrap';
import profileCompany from './img/profile-company.png';

class CompanyProfile extends Component{

    render(){
        return(
            <div id="container">
                <Row id="back"><i id="icon-back" class="fas fa-chevron-left"></i>BACK</Row>
                <Row id="row-tittle">
                    <Col id="tittle">Textil Sumey</Col>
                    <Col><Image id="profile" src={profileCompany} roundedCircle /></Col>
                </Row>
                <div id="row-text">
                    <Row className="text">Mayorista textil en</Row>
                    <Row className="text">Recoleta, Chile</Row>
                </div>
                
                <Row id="row-type">
                    <Col id="icon-type"><i class="fas fa-ellipsis-v"/><i class="fas fa-ellipsis-v"/><i class="fas fa-ellipsis-v"/></Col>
                    <Col>
                        <Row className="text">Retazos</Row>
                        <Row className="text">Cuero</Row>
                    </Col>
                    <Col><i class="fas fa-user"></i></Col>
                </Row>
                <Row>Horarios</Row>
                <Row>
                    <Col>L</Col>
                    <Col>M</Col>
                    <Col>W</Col>
                    <Col>J</Col>
                    <Col>V</Col>
                    <Col>S</Col>
                </Row>
                <Row id="button-profile"><Button variant="outline-primary">GENERAR RUTA</Button></Row>
            </div>
        )
    }
}

export default CompanyProfile;