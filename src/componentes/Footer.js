import React , {Component } from 'react';
import logo from '../img/cea-foot.png';
import '../App.css';
import M from 'materialize-css';
import TableV from './TableV';
import { Link } from 'react-router-dom';

import axios from 'axios';

class Footer extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            valores: [  ]
        }
    }
    getValores = ()=> {
        const URL = 'https://mighty-depths-11165.herokuapp.com/api/v5/admin/get/values/21351532';

        axios.get (URL)
        .then((result) => {
            this.setState ({
                valores: result.data
                
            })
        }).catch((err) => {
            console.log(err)
        });
    }

    componentDidMount() {
        M.AutoInit();
        this.getValores();
    }
    renderValores = () => {
        if (this.state.valores.length === 0) {
            return  <div class="progress">
            <div class="indeterminate"></div>
        </div>
                
        } else {
            const listaval = this.state.valores.map((valor) => {
                return <TableV getValores={this.getValores} Nombre={valor.Nombre} Matricula={valor.Matricula} Pension={valor.Pension} />
            });
            return listaval
        }
    }
    render(){
        return(
            <footer>
                <div className="row rowbackgray rowpadtop rowsinmag">
                    {/* Boton footer atencion a padres */}
                    <div className="col s12 m4 right-align colconmagtop">
                        <div className="rowflex">
                            <i class="small material-icons ilinkint white-text">face</i>
                            <a href="#horarios" className="linkint hoverable modal-trigger">Atención a Padres</a>
                        </div>
                    </div>

                    {/* Boton footer valores pension */}
                    <div className="col s12 m4 center-align colconmagtop">
                        <div className="rowflex">
                            <i class="small material-icons ilinkint white-text">attach_money</i>
                            <a href="#valores" className="linkint hoverable modal-trigger">Valores de Pension</a>
                        </div>
                    </div>

                    {/* Boton footer atencion Ingresar a Helper */}
                    <div className="col s12 m4 left-align colconmagtop">
                        <div className="rowflex">
                            <i class="small material-icons ilinkint white-text">send</i>
                            <a href="https://www.helpex.co/bypass.aspx" className="linkint hoverable" target="_blank">Ingresar a Helper</a>
                        </div>
                    </div>
                </div>
                <div id="horarios" class="modal modal-fixed-footer">
                    <div class="modal-content">
                        <div className="row rowblue white-text">
                            <h4 className="center-align">Horarios de Atención a Padres</h4>
                            <hr className="hrwhite"/>
                            <p className="center-align">La atención en Cordinación Académica son solo con cita previa.</p>
                        </div>
                        <div className="row">
                            <table className="striped">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Lunes</th>
                                        <th>Martes</th>
                                        <th>Miercoles</th>
                                        <th>Jueves</th>
                                        <th>Viernes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ERICA MARTINEZ</td>
                                        <td>7:30 A 8:30</td>
                                        <td>7:30 A 9:20</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>CAROLA ZULUAGA</td>
                                        <td>6:30</td>
                                        <td>6:30</td>
                                        <td>7:30 A 9:20</td>
                                        <td>6:30</td>
                                        <td>6:30</td>
                                    </tr>
                                    <tr>
                                        <td>GLORIA TORRES</td>
                                        <td>-</td>
                                        <td>8:20 A 9:30 Y 10:45 A 11:30</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>DANIELA TORRES</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>7:30 A 8:20</td>
                                    </tr>
                                    <tr>
                                        <td>ANGELA QUICENO</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>7:30 A 8:00</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>YEISON MONTOYA</td>
                                        <td>-</td>
                                        <td>7:30 A 8:00</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>EDISON GALLEGO</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>12:00 A 1:40</td>
                                    </tr>
                                    <tr>
                                        <td>EDNA ARANGO</td>
                                        <td>-</td>
                                        <td>8:00 A 9:00</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>LIZETH GALVIS</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>7:00 A 8:30</td>
                                    </tr>
                                    <tr>
                                        <td>DIANA RENDON</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>7:00 A 7:30</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>YEIMI BENITEZ</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>8:00 A 8:40</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>VIVIANA HURTADO</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>7:00 A 8:30</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>BALLESTEROS</td>
                                        <td>7:00 A 8:40</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
                    </div>
                </div>
                <div id="valores" class="modal modal-fixed-footer">
                    <div class="modal-content">
                    <div className="row rowblue white-text">
                            <h4 className="center-align">Costos Educativos</h4>
                            <hr className="hrwhite"/>
                            <p className="center-align">Los costos educativos en la institución estan estipulados para el año actual de la siguiente manera:</p>
                        </div>
                        <div className="row">
                            <table className="striped">
                            <thead>
                                <tr>
                                    <th>Nivel</th>
                                    <th>Matricula</th>
                                    <th>Pensión</th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.renderValores()}
                            </tbody>              
                        </table>     
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
                    </div>
                </div>
                <div className="rowflex">
                    <div className="divheight">
                        <img src={logo} alt="CEA" className="imgprin"/>
                    </div>
                    <div className="divheight">
                        <p className="white-text valign-wrapper">Calle 104 # 68 A - 77 | PBX: 444 5802</p>
                    </div>
                </div>
                <div className="rowflex">
                    <div className="divbordetop">
                        <p className="pfooter white-text">Este sitio fue desarrollado por Helpex & Estudio Tándem / Todos los derechos reservados 2019</p>
                        <Link to={'/colegio'} className="afooter white-text">El Colegio</Link>
                        <Link to={'/admisiones'} className="afooter white-text">Admisiones</Link>
                        <a href="http://ceautonomo.com.co/PhotoAlbumsPro/index.php" target="_blank" className="afooter white-text">Galeria</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;