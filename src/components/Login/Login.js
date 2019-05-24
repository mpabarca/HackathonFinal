import React, { Component } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';

const Login = (props) =>{
    
    return (

        <div className="background">
        <img className="logo"src=" https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/logo%20hackathon.png"/>
            <form className="form">
                <div>
                    <p className="email">EMAIL</p>
                    <input type="text" className="input-login" placeholder="sofia.t@gmail.com"></input>
                </div>
                <div>
                    <p className="password">CONTRASEÑA</p>
                    <input className="input-login" type="password" placeholder="•••••••••"></input>
                    </div>
            </form>
            <div className="btnsLogin">
            <Button variant="outline-primary" className="btnLogin" value="signin" onClick={props.onClick}>Registrarte</Button>
            <p className="text">¿Ya tienes una cuenta?</p>
            <Button variant="outline-primary" value="login" onClick={props.onClick} className="btnSingin">Iniciar Sesión</Button>
            </div>
        </div>
    )
}


export default Login;