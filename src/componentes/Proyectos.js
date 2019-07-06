import React, { Component } from 'react';
import '../App.css';
import imgbanner from '../img/banner3.png';
import M from 'materialize-css';

import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import Btnfloat from './btnfloat';

class Proyectos extends Component {
    render() {
        return (
            <div>
                <Navbar opcion="op3"/>
                <Banner ruta={imgbanner} />
                <div className="container">
                    <div className="row">
                        <div class="col s12 m4">
                            <div class="card colorcard">
                                <div class="card-content">
                                    <span class="card-title titblue titmay">Plan Lector</span>
                                    <p className="pjustify">El PLAN LECTOR es un proyecto que nace desde el Área de Lengua Castellana con el fin de asumir al hombre como un ser lleno de significados y sentidos que se desarrolla a partir de su integración con la cultura. 
                                        Proceso que humaniza y a través del cuál se hace histórico, 
                                        en la medida que acepta sus responsabilidades y enfrenta con autonomía sus derechos y deberes.</p>
                                </div>
                                <div class="card-action">
                                    <a href="https://drive.google.com/file/d/0B6HaFXTT0IHRX2hPRXhmRXBVN1E/edit" className="acardproy white-text z-depth-1" target="_blank">Descargar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card colorcard">
                                <div class="card-content">
                                    <span class="card-title titblue titmay">Olimpiadas del Conocimiento</span>
                                    <p className="pjustify">OLIMPIADAS DEL CONOCIMIÉNTO es un proyecto que pretende involucrar la lúdica con el aprendizaje activo, 
                                    por medio de concursos potencializar en los estudiantes sus competencias. 
                                    Se pretende que los estudiantes tengan oportunidad de aprender o afianzar sus conocimientos de una manera más dinámica a lo habitual.</p>
                                </div>
                                <div class="card-action">
                                    <a href="https://drive.google.com/file/d/0B6HaFXTT0IHROFc4d3hCcHBRZlE/edit" className="acardproy white-text z-depth-1" target="_blank">Descargar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card colorcard">
                                <div class="card-content">
                                    <span class="card-title titblue titmay">Aprovechamiento del tiempo Libre</span>
                                    <p className="pjustify">El proyecto extracurricular es un espacio que brinda el Centro Educativo Autónomo, 
                                    como una herramienta pedagógica para la utilización adecuada del tiempo libre y la formación cultural, 
                                    física y deportiva de los estudiantes que decidan participar de él.</p>
                                </div>
                                <div class="card-action">
                                    <a href="https://drive.google.com/file/d/0B6HaFXTT0IHRQXhXVkdHYTRkUmM/edit" className="acardproy white-text z-depth-1" target="_blank">Descargar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col s12 m4">
                            <div class="card colorcard">
                                <div class="card-content">
                                    <span class="card-title titblue titmay">Escuela Sana y Segura</span>
                                    <p className="pjustify">ESCUELA SANA Y SEGURA se dirige, principalmente, 
                                    a atender a la población infantíl y juveníl del Centro Educativo Autónomo, 
                                    favoreciendo y potenciando su desarrollo integral y su autonomía personal, 
                                    actuando también sobre su entorno más inmediato.</p>
                                </div>
                                <div class="card-action">
                                    <a href="https://drive.google.com/file/d/0B6HaFXTT0IHRcDA3RlVsU3dlNmc/edit" className="acardproy white-text z-depth-1" target="_blank">Descargar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card colorcard">
                                <div class="card-content">
                                    <span class="card-title titblue titmay">Planeta Vivo</span>
                                    <p className="pjustify">El proyecto PLANETA VIVO pretende agrupar aquellas propuestas de intervención pedagógica enfocadas al buen uso de los recursos naturales y 
                                    a la creación de alternativas de solución a problemas institucionales a través de la investigación en ciencias naturales.</p>
                                </div>
                                <div class="card-action">
                                    <a href="https://drive.google.com/file/d/0B6HaFXTT0IHRLW4xM2h3N1BNd2s/edit" className="acardproy white-text z-depth-1" target="_blank">Descargar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card colorcard">
                                <div class="card-content">
                                    <span class="card-title titblue titmay">Cátedras Educativas Obligatorias</span>
                                    <p className="pjustify">En el Centro Educativo Autónomo se pretende que con este proyecto pedagógico se alcance una educación orientada hacia la convivencia y el respeto por el otro, 
                                    lo cual es imprescindible para la construcción de una sociedad más democrática, más solidaria, más cohesionada y más pacífica.</p>
                                </div>
                                <div class="card-action">
                                    <a href="https://drive.google.com/file/d/0B6HaFXTT0IHRYkU4SG9RTE9scTA/edit" className="acardproy white-text z-depth-1" target="_blank">Descargar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col s12 m4">
                            <div class="card colorcard">
                                <div class="card-content">
                                    <span class="card-title titblue titmay">Convivencia Escolar</span>
                                    <p className="pjustify">Este proyecto de convivencia parte de la integración de todas las instancias de la comunidad educativa. 
                                    Lo cuál es necesario para que los estudiantes construyan sus propios ideales de formación y a la vez su relación con el otro, 
                                    como lo plantean BENJUMEA y otros. Con este tipo de proyectos el estudiante no solo se forma desde la convivencia, 
                                    además logra fomentar una ciudadanía enmarcada en la subjetividad política de la relación con la otredad, 
                                    teniendo en cuenta la alteridad como parte fundamental en la formación de cada sujeto.</p>
                                </div>
                                <div class="card-action">
                                    <a href="https://drive.google.com/file/d/0B6HaFXTT0IHRZWZORHZXZFR3UDg/edit" className="acardproy white-text z-depth-1" target="_blank">Descargar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card colorcard">
                                <div class="card-content">
                                    <span class="card-title titblue titmay">Alfabetización</span>
                                    <p className="pjustify">El Centro Educativo Autónomo con la convicción de formar personas íntegras pretende educar desde la solidaridad, el respeto y la responsabilidad, 
                                    con el proyecto de SERVICIO SOCIAL los estudiantes crearán una mentalidad de ayuda y servicio a la sociedad enfocada en el bién común y donde prima la colectividad sobre la individualidad, 
                                    educando así desde la pluralidad y con el fin de concientizar la convivencia en la sociedad.</p>
                                </div>
                                <div class="card-action">
                                    <a href="https://drive.google.com/file/d/0B6HaFXTT0IHRRzRLMTlHYUNDN2c/edit" className="acardproy white-text z-depth-1" target="_blank">Descargar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card colorcard">
                                <div class="card-content">
                                    <span class="card-title titblue titmay">Democracia</span>
                                    <p className="pjustify">El proyecto de DEMOCRACIA hace parte del área de Ciencias Sociales. 
                                    Este tiene como finalidad incentivar un ambiente de reflexión en torno a la norma, 
                                    la eleccion y la representación de los líderes de la institución. 
                                    Parte del trabajo con cada grupo del manual de convivencia del CEA y del análisis de los perfiles y funciones de cada uno de los componentes del gobierno escolar, 
                                    así como de los derechos y deberes de las personas que conforman la comunidad educativa.</p>
                                </div>
                                <div class="card-action">
                                    <a href="https://drive.google.com/file/d/0B6HaFXTT0IHRUW1LM2piSElQb3c/edit" className="acardproy white-text z-depth-1" target="_blank">Descargar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col s12 m4">
                            <div class="card colorcard">
                                <div class="card-content">
                                    <span class="card-title titblue titmay">Educación Sexual</span>
                                    <p className="pjustify">El proyecto de EDUCACIÓN SEXUAL surge de la necesidad de generar en la institución una actitud abierta
                                     y valorativa de los temas referentes a la sexualidad y de la construcción de una identidad de género en los diferentes niveles escolares, 
                                    desde una posición que pretende dejar de lado los prejuicios que existen en torno al tema.</p>
                                </div>
                                <div class="card-action">
                                    <a href="https://drive.google.com/file/d/0B6HaFXTT0IHRVkhfTzVoSUNfdnM/edit" className="acardproy white-text z-depth-1" target="_blank">Descargar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card colorcard">
                                <div class="card-content">
                                    <span class="card-title titblue titmay">Ciencia en tus Manos</span>
                                    <p className="pjustify">La Feria de la Ciencia, la Tecnología y la Innovación es un proyecto escolar que pretende la creación de una cultura científica en los niños y 
                                    jóvenes por medio de su participación en procesos de investigación desde el aula de clase.</p>
                                </div>
                                <div class="card-action">
                                    <a href="https://drive.google.com/file/d/0B6HaFXTT0IHRUnFQNGRsWlJ5MFk/edit" className="acardproy white-text z-depth-1" target="_blank">Descargar</a>
                                </div>
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

export default Proyectos;