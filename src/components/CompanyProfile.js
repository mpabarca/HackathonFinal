import React, {Component} from 'react';
import './companyprofile.css';
import {Container, Row, Col, Button, Image } from 'react-bootstrap';
import profileCompany from './img/profile-company.png';
import tela from './img/tela-letra.png';

const CompanyProfile = (props) =>{

    let link='https://wego.here.com/directions/drive/Calle-Puma-1180,-8420000-Recoleta,-Recoleta,-Region-Santiago-Metropolitan,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPUNhbGxlK1B1bWErMTE4MDtsYW5nPWVzO2xhdD0tMzMuNDE5MTI4NDE3OTY4NzU7bG9uPS03MC42NDE4NTMzMzI1MTk1MztzdHJlZXQ9Q2FsbGUrUHVtYTtob3VzZT0xMTgwO2NpdHk9UmVjb2xldGE7cG9zdGFsQ29kZT04NDIwMDAwO2NvdW50cnk9Q0hMO2Rpc3RyaWN0PVJlY29sZXRhO3N0YXRlPVJlZ2lvbitTYW50aWFnbytNZXRyb3BvbGl0YW47c3RhdGVDb2RlPVJNO2NvdW50eT1TYW50aWFnbztjYXRlZ29yeUlkPWJ1aWxkaW5nO3NvdXJjZVN5c3RlbT1pbnRlcm5hbDtubGF0PS0zMy40MTkxNTEzMDYxNTIzNDQ7bmxvbj0tNzAuNjQxNzk5OTI2NzU3ODE7cGRzQ2F0ZWdvcnlJZD05MDAtOTMwMC0wMDAw/Calle-Roman-D%C3%ADaz-26,-7500000-Salvador,-Providencia,-Region-Santiago-Metropolitan,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPUNhbGxlK1JvbWFuK0QlQzMlQURheisyNjtsYW5nPWVzO2xhdD0tMzMuNDMwNTY4Njk1MDY4MzY7bG9uPS03MC42MjI1MjgwNzYxNzE4ODtzdHJlZXQ9Q2FsbGUrUm9tYW4rRCVDMyVBRGF6O2hvdXNlPTI2O2NpdHk9UHJvdmlkZW5jaWE7cG9zdGFsQ29kZT03NTAwMDAwO2NvdW50cnk9Q0hMO2Rpc3RyaWN0PVNhbHZhZG9yO3N0YXRlPVJlZ2lvbitTYW50aWFnbytNZXRyb3BvbGl0YW47c3RhdGVDb2RlPVJNO2NvdW50eT1TYW50aWFnbztjYXRlZ29yeUlkPWJ1aWxkaW5nO3NvdXJjZVN5c3RlbT1pbnRlcm5hbDtubGF0PS0zMy40MzA2MTgyODYxMzI4MTtubG9uPS03MC42MjI2MTE5OTk1MTE3MjtwZHNDYXRlZ29yeUlkPTkwMC05MzAwLTAwMDA?map=-33.42571,-70.63221,15,normal&avoid=carHOV'
    return(
        <Container id="container">
            <Row className="rowMe" ><button id="back" value="signin-check" onClick={props.onClick}><i id="icon-back" class="fas fa-chevron-left"></i>VOLVER</button></Row>
            <Row className="rowMe" id="row-tittle">
                <Col id="tittle">Textil Sumey</Col>
                <Col>
                    <Image id="profile" src={profileCompany} roundedCircle />
                    <div id="row-text">
                        <Row id="mayorista" className="text">Mayorista textil en</Row>
                        <Row id="recoleta" className="text">Recoleta, Chile</Row>
                    </div>
                </Col>
            </Row>
            <Row className="rowMe" id="row-type">
                <div id="col-info">Material reutilizable disponible</div>
                <Col> <Image id="tela-icon" src={tela}/></Col>
            </Row>
            <div id="row-container">
                <Row className="rowMe" id="horario">Horarios</Row>
                <Row className="rowMe" id="row-horario">
                    <Col className="day">L</Col>
                    <Col className="day">M</Col>
                    <div id="select-one"></div>
                    <Col className="day">W</Col>
                    <Col className="day">J</Col>
                    <div id="select-two"></div>
                    <Col className="day">V</Col>
                    <Col className="day">S</Col>
                </Row>
                <Row className="rowMe" id="five">Entre 17:00 - 18:00</Row>
                <Row className="rowMe" id="row-info">
                    <div id="direction">Dirección</div>
                    <div>Antonia López de Bello 285, Recoleta</div>
                    <div>Región Metropolitana</div>
                </Row>
                <Row className="rowMe" id="button"><Button href={link} variant="outline-primary">GENERAR RUTA</Button></Row>
            </div>
            
        </Container>
    )
}

export default CompanyProfile;