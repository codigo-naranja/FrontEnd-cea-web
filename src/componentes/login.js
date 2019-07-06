import React , { Component } from 'react';
import '../App.css';
import M from 'materialize-css';
import logo from '../img/imglogin.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            cedula:"",
            password:""
        }
    }
    componentDidMount(){
        M.AutoInit();
    }
    onInputChange = (e) => {
        const {id,value} = e.target
        this.setState({
            [id]:value
        })
      
    }
    onbtnSubmit = (e) => {
        e.preventDefault();
        const URL = "https://mysterious-harbor-41673.herokuapp.com/api/v1/users/login"
        axios.post(URL,this.state)
        .then((result) => {
            M.toast({html: 'Inicio de sesión correcto', classes: 'rounded'})
            this.props.history.push('/MainDash')
        }).catch((err) => {
            M.toast({html: 'Cedula o Contraseña Incorrectos', classes: 'rounded'})
        });
    }
    render(){
        return(
            <div className="row rowsinscroll rowsinmag">
                <div className="col m5 l5 hide-on-small-only colsinpad">
                    <img src={logo} alt="Login" className="imglog"/>
                </div>
                <div className="col s12 m7 l7 colsinpad center-align">
                    <div className="row contconmagtop">
                        <h4 className="titlog">ADMIN - CEA</h4>
                        <p className="plog">AMOR AL SABER</p>
                    </div>
                    <div className="row center-align">
                        <div className="input-field col s12 m6 offset-m3">
                            <input id="cedula" type="text" class="validate" onChange={this.onInputChange} value={this.state.cedula} required></input>
                            <label for="cedula" className="txtform">Cédula</label>
                        </div>
                    </div>
                    <div className="row center-align">
                        <div className="input-field col s12 m6 offset-m3">
                            <input id="password" type="password" class="validate" onChange={this.onInputChange} value={this.state.password} minLength="8" maxLength="16" required></input>
                            <label for="password" className="txtform">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6 right-align">
                            <button type="submit" className="butonlogcolor white-text z-depth-1" onClick={this.onbtnSubmit}>Iniciar sesión</button>
                        </div>
                        <div className="col s6 valign-wrapper">
                            <Link to={'/'} className="butonlognocolor abutton z-depth-1">Regresar</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

