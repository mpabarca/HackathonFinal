import React, { Component } from 'react';
import './Company.css';

class Company extends Component {

    render() {
        return (
            <div className="companyBody">
                <div className="upIcons">
                    <i class="fas fa-arrow-left"></i>
                    <p className="back">Volver</p>
                </div>
                {/* <div className="textBackground">
                    <p className="companyText">Comparte tu dato de material reutilizable</p>
                </div> */}
                <div className="container">
                    <i class="far fa-lightbulb"></i>
                    <input className="input" placeholder="Nombre de la empresa o fábrica"></input>
                    <div>
                        <i class="far fa-smile"></i>
                        <input className="input" placeholder="Que realiza la empresa"></input>
                    </div>
                    <div>
                        <i class="far fa-clock"></i>
                        <input className="input" placeholder="Horario en el que atienden"></input>
                    </div>
                    <div>
                        <i class="far fa-star"></i>
                        <input className="input" placeholder="Que material reutilizable tienen"></input>
                    </div>
                    <div>
                        <i class="far fa-envelope"></i>
                        <input className="input" placeholder="Algún contacto,mail,número,..."></input>
                    </div>
                    <div>
                        <i class="fas fa-map-marker-alt"></i>
                        <input className="input" placeholder="Dirección"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Company;