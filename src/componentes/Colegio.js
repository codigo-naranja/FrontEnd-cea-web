import React , { Component } from 'react';
import '../App.css';
import imgbanner from '../img/banner2.png';
import imgmis from '../img/imgmision.png';
import imgpol from '../img/imgpol.png';
import M from 'materialize-css';

import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import Btnfloat from './btnfloat';

class Colegio extends Component {
    render() {
        return (
            <div>
                <Navbar opcion="op2"/>
                <Banner ruta={imgbanner} />
                <div className="row rowbackgray">
                    <div className="col l6 hide-on-med-and-down colsinpad">
                        <img src={imgmis} alt="Misión" className="imgbanner" />
                    </div>
                    <div className="col s12 m12 l6">
                        <div className="container contconmagtop">
                            <h3 className="titblue">Nuestra misión</h3>
                            <p className="pcol">Ser una institución de excelente calidad, sobresaliente por la formación integral del educando, por la idoneidad que logre en sus estudiantes, 
                                propiciante de la investigación, servidora de la comunidad, abierta y renovadora de las tecnologóas educativas, activa en el entorno educativo y
                                lider en orientar sus programas dentro de las exigencias de la cultura de las nuevas generaciones.</p>
                            <a href="https://drive.google.com/file/d/0B6HaFXTT0IHReVd6VGdLdGdMSDQ/view" className="helper abutton white-text z-depth-1" target="_blank">Manual de Convivencia</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <h3 className="titblue center-align">Nuestra visión</h3>
                        <hr className="hrcolegio" />
                        <p className="pcol">El Centro Educativo Autónomo será una institución reconocida a nivel local, nacional e internacional,
                        por su excelencia academica, por ser líder en formación de jóvenes íntegros con proyección a su comunidad y constructores de una nueva sociedad cimentada en principios y valores culturales, morales, éticos y ecológicos.
                        </p>
                        <p className="pcol">Será una institución educativa formadora de personas con mente abierta a la búsqueda del conocimiento, a la globalización, al pluralismo, al cambio,
                        al trabajo cooperativo ya los avances tecnológicos. </p>
                        <p className="pcol">Logrará ser una empresa exitosa en la potenciación de las habilidades y destrezas de los estudiantes para facilitarles el logro de sus ideales a través del desarrollo ,
                        manejo de tecnología y competencia linguística en el idioma inglés, que les permita estar al nivel de las exigencias interculturales del nuevo milenio.</p>
                    </div>
                </div>
                <div className="row rowbackgray">
                    <div className="col s12 m12 l6">
                        <div className="container contconmagtop">
                            <h3 className="titblue">Nuestra política</h3>
                            <p className="pcol">El Centro Educativo Autónomo (CEA) brinda un servicio de educación caracterizado por su alto nivél académico con énfasis en Inglés e Informática; 
                            fundamentado en un Sistema de Gestión de Calidad (SGC) basado en procesos; con un Talento Humano calificado y en la búsqueda del mejoramiento continuo, 
                            siempre direccionado al alcance de la formación integral de los estudiantes y al desarrollo de sus competencias y habilidades esenciales para el desmpeño de su vida futura.</p>
                        </div>
                    </div>
                    <div className="col l6 hide-on-med-and-down colsinpad">
                        <img src={imgpol} alt="Politica" className="imgbanner" />
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <h3 className="titblue center-align">Nuestros valores</h3>
                        <hr className="hrcolegio" />
                        <p className="pgray center-align">Nuestro decálogo de valores esta conformado por:</p>
                        <div className="rowflex">
                            <ul className="ulflex">
                                <i class="material-icons">check_circle</i><li>Integridad</li>
                                <i class="material-icons">check_circle</i><li>Respeto</li>
                                <i class="material-icons">check_circle</i><li>Justicia</li>
                                <i class="material-icons">check_circle</i><li>Honestidad</li>
                                <i class="material-icons">check_circle</i><li>Pluralidad</li>
                            </ul>
                        </div>
                        <div className="rowflex">
                            <ul className="ulflex">
                                <i class="material-icons">check_circle</i><li>Responsabilidad</li>
                                <i class="material-icons">check_circle</i><li>Tolerancia</li>
                                <i class="material-icons">check_circle</i><li>Solidaridad</li>
                                <i class="material-icons">check_circle</i><li>Amor</li>
                                <i class="material-icons">check_circle</i><li>Calidad</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Btnfloat/>
                <Footer /> 
            </div>
        );
    }
}

export default Colegio;