import React , {Component } from 'react';
import '../App.css';
import M from 'materialize-css';
import Axios from 'axios';
// import Notimg from '../img/education.png';
// import axios from 'axios';

class CardN extends Component {

    constructor (props) {
        super(props);
        this.state = {
            }
        }

    componentDidMount() {
        M.AutoInit();
    }

    deletenoti = () => {
        console.log(this.props.id);
        Axios.delete (`https://mysterious-harbor-41673.herokuapp.com/api/v1/noticias/delete/${this.props.id}`)
        .then((result) => {
            this.props.getNoticias ()
        }).catch((err) => {
            alert(err)
        });
    }
    
    render() {
        return(

    
            <div>
                    <div class="col s12 m4">
                        <div class="card hoverable">
                            <div class="card-image">
                                <img src = {this.props.url} alt="Noticia"/>
                            </div>
                            
                            {/* Contenido de la card */}
                            <div class="card-content">
                                <span class="card-title">{this.props.titulo}</span>
                                <p className="truncate">{this.props.cuerpoNoticia}</p>
                                <br/>
                                <hr className="hrcolegio"/>
                                <p className="pcards"><b>Autor:</b> {this.props.creadoPor}</p>
                                <p className="pcards"><b>Fecha:</b> {this.props.fecha}</p>
                            </div>

                            {/* Este es la parte que me debe llevar a leer el articulo */}
                            <div class="card-action">
                                <a href={this.props.notiId} class="acard modal-trigger" >Leer Más</a>
                                <button onClick={this.deletenoti} className="btn-floating btn-small waves-effect waves-light red right invisible"><i class="material-icons">remove</i></button>
                            </div>
                        </div>
                </div>
                
                <div id={this.props.id} class="modal modal-fixed-footer">
                    <div class="modal-content">
                        <img src={this.props.url} alt="imagen" className="imgbanner" />
                        <hr className="hrcolegio"/>
                        <p className="pcards"><b>Autor:</b> {this.props.creadoPor}</p>
                        <p className="pcards"><b>Fecha:</b> {this.props.fecha}</p>
                        <h4>{this.props.titulo}</h4>
                        <p>{this.props.cuerpoNoticia}</p>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardN;