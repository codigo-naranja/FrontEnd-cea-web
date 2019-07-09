import React , { Component } from 'react';
import '../App.css';
import M from 'materialize-css';
import bg18 from '../img/bg-18.png';
import imgbanner from '../img/banner001.png';
// import $ from 'jquery';

import Navbar from './Navbar';
import Banner from './Banner';
import CardN from './CardN';
import Footer from './Footer';
import Btnfloat from './btnfloat';

import axios from 'axios';



// Llamado Backend //
class Principal extends Component{

    constructor (props) {
        super(props);
        this.state = { 
            noticias: [  ],

            newPQR:{
                name: "",
                email: "",
                type: "",
                message: "",
                nit: 21351532
            }        
            // nuevaNoticia: {
            //     imagen: "",
            //     titulo: "",
            //     cuerpoNoticia: "",
            //     creadoPor: ""
            // }
        }
    }

    componentDidMount()
    {
        M.AutoInit();
        this.getNoticias()
    }
    getNoticias = ()=> {
        const URL = 'https://mighty-depths-11165.herokuapp.com/api/v5/admin/get/news/21351532';

        axios.get (URL)
        .then((result) => {
            this.setState ({
                noticias: result.data
            })
        }).catch((err) => {
            console.log(err)
        });
    }

    onInputChange = (e) => {
        const {id, value} = e.target
        const nuevoState = {...this.state.newPQR}
        
        nuevoState[id] = value
        this.setState ({
            newPQR: nuevoState
        })
    }
    crearPeticion = (e) => {
        const nom = document.getElementById('name').value;
        const mail = document.getElementById('email').value;
        const pqr = document.getElementById('type').value;
        const mens = document.getElementById('message').value;

        if (nom === '' || mail === '' || mens === '' || pqr === ''){
            M.toast({html: 'Por favor llene todos los campos', classes: 'rounded'})
        }else{
            const URL = 'https://mighty-depths-11165.herokuapp.com/api/v5/admin/create/pqr'
            const pqr = this.state.newPQR
            
            axios.post (URL, pqr)
            .then((result) => {
                M.toast({html: 'Gracias por comunicarse con nosotros!!!', classes: 'rounded'})
            }).catch((err) => {
                alert(err)
            });
            document.getElementById('name').value='';
            document.getElementById('email').value='';
            document.getElementById('message').value='';
        }
        
    }

    // onInputChangeNoticia = (e) => {
    //     const {id, value} =e.target
    //     const newState = {...this.state.nuevaNoticia}
        
    //     newState[id] = value
    //     this.setState ({
    //         nuevaNoticia: newState
    //     })
    // }

    // crearNoticia = (e) => {
    //     const URL = 'https://mysterious-harbor-41673.herokuapp.com/api/v1/noticias/create'
    //     const noti = this.state.nuevaNoticia
    //     console.log(noti);
    //     axios.post (URL, noti)
    //     .then((result) => {
    //         this.getNoticias()
    //     }).catch((err) => {
    //         alert(err)
    //     });
    // }

    rendernoticias = () => {
        if (this.state.noticias.length === 0) {
            return  <div class="progress">
            <div class="indeterminate"></div>
        </div>
                
        } else {
            const listanot = this.state.noticias.map((noti) => {
                let idnoti = "#" + noti.id;
                return <CardN getNoticias={this.getNoticias} id={noti.id} url={noti.url} titulo={noti.titulo} cuerpoNoticia={noti.cuerpo} notiId={idnoti} creadoPor={noti.creadopor} fecha={noti.fecha} />
            });
            return listanot
        }
    }


    render() {
        return(
            <div>
                <Navbar opcion="op1"/>
                <Banner ruta={imgbanner} />
                <div className="row rowconmagtop">
                    <div className="col s12 m4 center-align">
                        <i class="medium material-icons colorsvg1 white-text circle">school</i>

                        {/* Primer item formacion integral */}
                        <h6>Formación Integral</h6>
                        <div className="divp">
                            <p className="partic">Nuestra apuesta pedagógica se convierte en una construcción personal cimentada en la autonomía, la libertad, la independencia y la buena convivencia.</p>
                        </div>
                    </div>
                    <div className="col s12 m4 center-align">
                        <i class="medium material-icons colorsvg2 white-text circle">star_border</i>
                        
                        {/* Segundo item Excelencia academica */}
                        <h6>Excelencia Académica</h6>
                        <div className="divp">
                            <p className="partic">Nuestra meta es la excelencia, por eso nuestro camino es la calidad, de allí que busquemos el mejoramiento constante a través de la proyección y el cumplimiento de objetivos.</p>
                        </div>
                    </div>
                    
                    {/* Tercer item, formacion de jovenes */}
                    <div className="col s12 m4 center-align">
                        <i class="medium material-icons colorsvg3 white-text circle">loyalty</i>
                        <h6>Formación de Jóvenes</h6>
                        <div className="divp">
                            <p className="partic">Nuestra razón fundamental de ser, es la esperanza que tenemos en que son precisamente ellos, niños, niñas y jóvenes en quienes reposa la esperanza del mañana mejor.</p>
                        </div>
                    </div>
                </div>
                


                {/* Este es el titulo de las noticias */}
                <div className="row rowconmagtop rowbackgray">
                    <div className="row">
                            <div className="col s4 offset-s4">
                                 <h2 className="center-align titgray flow-text">Mantente actualizado con nuestras últimas noticias</h2>
                            </div>
                    </div>

                    
 {/* ************************************* Crear Noticia ************************************************* */}
 {/* ************************************* Crear Noticia ************************************************* */}
 {/* ************************************* Crear Noticia ************************************************* */}


                    {/* Aqui es para crear noticia */}
                    {/* <div className= "container invisible" > 
                            <div className = "row">
                            <ul className="collapsible">
                                <li>
                                <div className="collapsible-header"><i class="material-icons"></i>Agregar noticia </div>
                                    <div class="collapsible-body">
                                    <div class="row">
                                            <div class="input-field col s6">

                                            
                                            <input placeholder="Autor" onChange = {this.onInputChangeNoticia} value={this.state.nuevaNoticia.creadoPor} id="creadoPor" type="text" class="validate"/>


                                           
                                            <input placeholder="Titulo de la noticia" onChange = {this.onInputChangeNoticia}  value= {this.state.nuevaNoticia.titulo} id="titulo" type="text" class="validate"/>
                                            
                                            
                                            <input placeholder="Escribe tu noticia" onChange = {this.onInputChangeNoticia}  value={this.state.nuevaNoticia.cuerpoNoticia} id="cuerpoNoticia" type="text" class="validate"/>

                                           
                                            <input placeholder="URL Imagen" onChange = {this.onInputChangeNoticia} value={this.state.nuevaNoticia.imagen} id="imagen" type="text" class="validate"/>
                                            
                                          
                                            <button onClick = {this.crearNoticia} class="btn waves-effect waves-light" type="submit" name="action">Crear Noticia
                                                <i className="material-icons right">send</i>
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            </div>
                    </div> */}
                    <div className="container">
                        <div className = "row">
                            {this.rendernoticias ()} 
                        </div>
                    </div>
                </div>


 {/* ************************************* Formulario ************************************************* */}
 {/* ************************************* Formulario ************************************************* */}
 {/* ************************************* Formulario ************************************************* */}

                {/* //Aca empieza el formulario */}
                <div className="row rowconmagtop">
                    <div className="col s12 m6 l4 offset-l2">
                        <div className="row">
                            <div className="col s12 m8 push-m4 center-align">
                                <h4 className="titblue flow-text">¿Tienes alguna inquietud?</h4>
                                <p className="pPQR">Contestaremos lo antes posible</p>
                                

                                {/* Campo Imput Nombre */}
                                <div className="input-field col s12">
                                    <input onChange={this.onInputChange} value = {this.state.newPQR.nombre} id="name" type="text" class="validate"></input>
                                    <label for="name" className="txtform">Nombre</label>
                                </div>

                            

                                {/* Campo imput Email */}
                                <div className="input-field col s12">
                                    <input  onChange={this.onInputChange} value={this.state.newPQR.email} id="email" type="email" class="validate"></input>
                                    <label for="mail" className="txtform">Email</label>
                                </div>

                                {/* Campo imput PQR */}
                                <div class="input-field col s12">
                                    <select id="type" onChange={this.onInputChange} value={this.state.newPQR.pqr}>
                                        <option value="" disabled selected>PQR</option>
                                        <option value="1">Pregunta</option>
                                        <option value="2">Queja</option>
                                        <option value="3">Reclamo</option>
                                    </select>
                                </div>

                                {/* Campo Imput Mensaje */}
                                <div class="input-field col s12">
                                    <textarea onChange={this.onInputChange} value={this.state.newPQR.mensaje} id="message" class="materialize-textarea"></textarea>
                                    <label for="msg" className="txtform">Mensaje</label>
                                </div>

                                {/* Este es el boton para ennviar PQR */}
                                <div className="col s12">
                                    <button onClick={this.crearPeticion} type="submit" className="helper white-text z-depth-1">Enviar</button>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Aqui va la imagen que va al lado del form */}
                    <div className="col m4 l4 hide-on-small-only">
                        <div className="row rowconmagtop">
                            <img src={bg18} alt="Imagen" className="responsive-img"/>
                        </div>
                    </div>
                </div>

                {/* Iframe de Google Maps */}
                <div className="row rowsinmag">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2804.192714278182!2d-75.56969761007132!3d6.2995107697830335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff1c8d54b6c1e1b!2sColegio+Autonomo!5e0!3m2!1ses!2sco!4v1554907165674!5m2!1ses!2sco" title="CEA" className="mapa" frameborder="0" allowfullscreen></iframe>
                </div>
                <Btnfloat/>
                <Footer/>            
            </div>
        );
    }
}

export default Principal;