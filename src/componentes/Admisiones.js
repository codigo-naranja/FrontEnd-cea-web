import React, { Component } from 'react';
import '../App.css';
import imgbanner from '../img/banner4.png';
import M from 'materialize-css';

import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import Btnfloat from './btnfloat';

class Admisiones extends Component {
    render() {
        return (
            <div>
                <Navbar opcion="op4"/>
                <Banner ruta={imgbanner} />
                <div className="row rowbackgray rowpadtop">
                    <div className="container">
                        <h3 className="titblue center-align hsinmagtop">Proceso de Admisión</h3>
                        <hr className="hrcolegio" />
                        <p className="pcol">En el Centro Educativo Autónomo nos gusta hacer las cosas bien, 
                        por esta razón en esta sección hemos puesto a su disposición el proceso que debe serguir para el ingreso de un estudiante a nuestra institución.
                        </p>
                        <p className="pcol">A continuaición detallamos el proceso y encontrara para su descarga los formatos necesarios:</p>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m1">
                                <h2 className="titblue hsinmagtop hnum">01.</h2>
                            </div>
                            <div className="col s12 m11">
                                <p className="pnum">Descargar los 2 formatos en PDF que se encuentran a continuación.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l6 right-align colconmagtop">
                                <a href="https://drive.google.com/file/d/1S8f93YNs-AVgC22y_LkwXYkwQETMS5Ya/view" className="helper abutton white-text z-depth-1" target="_blank">Solicitud de Inscripción</a>
                            </div>
                            <div className="col s12 m12 l6 colconmagtop">
                                <a href="https://drive.google.com/file/d/1bJsVaUWGLmKwHk-RwCood8WxAufCMuLF/view" className="abluedark white-text z-depth-1" target="_blank">Informe de Procedencia</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row rowbackgray">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m1">
                                <h2 className="titblue hsinmagtop hnum hpconmagtop">02.</h2>
                            </div>
                            <div className="col s12 m11">
                                <p className="pnum hpconmagtop">Diligenciar la Solicitud de Inscripción en la casa, en su totalidad y tener en cuenta que el codeudor no puede ser ni el papá, ni la mamá y tampoco una persona pensionada.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m1">
                                <h2 className="titblue hsinmagtop hnum">03.</h2>
                            </div>
                            <div className="col s12 m11">
                                <p className="pnum">El Informe de Procedencia debe ser diligenciado por la Institución de Procedencia del Aspirante, además los aspirantes para los grados de Básica Primaria y Básica Secundaria deben anexar fotocopia de las últimas calificaciones del grado cursado y la ficha de seguimiento u hoja de vida.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row rowbackgray">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m1">
                                <h2 className="titblue hsinmagtop hnum hpconmagtop">04.</h2>
                            </div>
                            <div className="col s12 m11">
                                <p className="pnum hpconmagtop">Una vez completos los formularios, por favor acceda al siguiente link para completar la informacion y enviar los documentos solicitados ó acerquese a la institución para entregarlos en la Secretaría Académica, si usted no realiza este paso el estudiante <strong>NO</strong> queda inscrito.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 center-align colconmagtop">
                                <a href="https://helpex.co/inscriptions.aspx?n=21351532&c=CEA19" className="helper abutton white-text z-depth-1" target="_blank">Inscripción Virtual</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m1">
                                <h2 className="titblue hsinmagtop hnum">05.</h2>
                            </div>
                            <div className="col s12 m11">
                                <p className="pnum">La persona encargada de la Institución se pondrá en contacto con usted dentro de los siguiente 3 días hábiles para darle una respuesta a su solicitud.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Btnfloat/>
                <Footer />
            </div>
        );
    }
}

export default Admisiones;