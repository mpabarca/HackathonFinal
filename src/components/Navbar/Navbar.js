import React, { Component } from 'react';
import './Navbar.css';
import Button from 'react-bootstrap/Button';

class Navbar extends Component {

    render() {
        return (
            <div className="container">
            <div className="bla">
                <Button className="glassBtn " variant="outline-ligth" >
                    <img  className="Icon" src="https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/vidrio-letra.png" />
                </Button>
                <Button className="glassBtn " variant="outline-ligth" >
                    <img  className="Icon" src="https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/tela-letra.png" />
                </Button>
                <Button className="glassBtn " variant="outline-ligth" >
                    <img  className="Icon" src="https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/plastico-letra.png" />
                </Button>
                <Button className="glassBtn " variant="outline-ligth" >
                    <img  className="Icon" src="https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/papel-letra.png" />
                </Button>
                <Button className="glassBtn " variant="outline-ligth" >
                    <img  className="Icon" src="https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/celulares-letra.png" />
                </Button>
                </div>
            </div>
        )
    }
}

export default Navbar;