import React, { Component } from 'react';
import './Company.css';
import { Row, Col, Button } from 'react-bootstrap';

class Company extends Component {

    render() {
        return (
            <div className="companyBody">
                <Row className="upIcons" ><i id="backIcon"class="fas fa-chevron-left"></i>Volver</Row>
                <Row className="share">Comparte tu dato de material reutilizable</Row>
                <Row>
                    <Col xs="2">
                        <Row className="iconCompany "><i class="far fa-lightbulb"></i></Row>
                        <Row className="iconCompany"><i class="far fa-smile"></i></Row>
                        <Row className="iconCompany"><i class="far fa-clock"></i></Row>
                        <Row className="iconCompany"><i class="far fa-star"></i></Row>
                        <Row className="iconCompany"><i class="far fa-envelope"></i></Row>
                        <Row className="iconCompany"><i class="fas fa-map-marker-alt"></i></Row>
                    </Col>

                    <Col>
                        <Row className="inputForm rowMe">Nombre de la empresa o fábrica</Row>
                        <Row className="inputForm rowMe" >Que realiza la empresa</Row>
                        <Row className="inputForm rowMe" >Horario en el que atienden</Row>
                        <Row className="inputForm rowMe" >Que material reutilizable tienen</Row>
                        <Row className="inputForm rowMe">Algún contacto,mail,número,...</Row>
                        <Row className="inputForm rowMe" >Dirección</Row>

                    </Col>
                </Row>
                <Button variant="outline-primary" className="btnAdd">Agregar</Button> </div>
        )
    }
}

export default Company;