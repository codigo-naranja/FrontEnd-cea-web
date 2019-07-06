import React , {Component } from 'react';
import M from 'materialize-css';
import logo from '../img/ceaweb.png';
import '../App.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        M.AutoInit();
        let op=this.props.opcion;
        console.log(op)
        document.getElementById(op).style.borderBottom = "1px solid #0095C5";
    }
    render() {
        return(
            <div id="inicio">
                    {/* menu NavBar para equipos de escritorio */}
                    <nav className="z-depth-0 white">
                        <div className="nav-wrapper banner flow-text white">
                            <img src={logo} alt="CEA" className="imgprin"/>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger black-text"> <i className="material-icons">menu</i> </a>
                            <ul className="right hide-on-med-and-down">
                                <li><Link id="op1" to={'/'} className="black-text menu">Home</Link></li>
                                <li><Link id="op2" to={'/colegio'} className="black-text menu">El Colegio</Link></li>
                                <li><Link id="op3" to={'/proyectos'} className="black-text menu">Proyectos</Link></li>
                                <li><Link id="op4" to={'/admisiones'} className="black-text menu">Admisiones</Link></li>
                                <li><a id="op5" href="http://ceautonomo.com.co/PhotoAlbumsPro/index.php" target="_blank" className="black-text menu">Galeria</a></li>
                                <li><a href="https://www.helpex.co/bypass.aspx" className="ahelper" target="_blank"><p className="helper valign-wrapper z-depth-1">Helper</p></a></li>
                            
                            </ul>
                        </div>
                    </nav>

                    {/* Menu NavBar para moviles */}
                    <ul className="sidenav" id="mobile-demo">
                        <li> <Link to={'/'} className="menu">Home</Link> </li>
                        <li> <Link to={'/colegio'} className="menu">El Colegio</Link> </li>
                        <li> <Link to={'/proyectos'} className="menu">Proyectos</Link> </li>
                        <li> <Link to={'/admisiones'} className="menu">Admisiones</Link> </li>
                        <li> <a href="http://ceautonomo.com.co/PhotoAlbumsPro/index.php" target="_blank" className="menu">Galeria</a> </li>
                        <li> <a href="https://www.helpex.co/bypass.aspx" className="ahelper white-text" target="_blank"><p className="helper valign-wrapper">Acceso Helper</p></a></li>
                    </ul>
            </div>
        );
    }
}

export default Navbar;