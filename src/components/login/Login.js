import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return(

            <div className="body">
            <form>
                <div>
            <input type="email" className="input"></input>
            <label className="email">EMAIL</label>
            </div>
            <div>
            <input type="text" className="input2"></input>
            <label className="password">PASSWORD</label>
            </div>
            </form>
            <button className="btnLogin">Registrarse</button>
            <p className="text">¿Ya tienes una cuenta?</p>
            <button>Iniciar Sesión</button>
            </div>
            
        )
    }
}

export default Login;