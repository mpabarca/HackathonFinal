import React, { Component } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';

class Login extends Component {

    render() {
        return (

            <div className="background">
                <form className="form">
                    <div>
                        <p className="email">EMAIL</p>
                        <input type="text" className="input"></input></div>
                    <div>
                        <p className="password">CONTRASEÑA</p>
                        <input className="input" type="text" className="input2"></input>
                        </div>
                </form>
                <Button variant="outline-primary" className="btnLogin">Registrarte</Button>
                <p className="text">¿Ya tienes una cuenta?</p>
                <Button variant="outline-primary" className="btnSingin">Iniciar Sesión</Button>

            </div>
        )
    }
}

export default Login;