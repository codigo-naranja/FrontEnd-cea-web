import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

import {BrowserRouter, Route} from 'react-router-dom';

import Principal from './componentes/Default';
import Colegio from './componentes/Colegio';
import Proyectos from './componentes/Proyectos';
import Admisiones from './componentes/Admisiones';
import Login from './componentes/login';
import MainDash from './componentes/Main';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="container-fluid">
            <Route exact path='/' component={Principal} />
            <Route exact path='/colegio' component={Colegio} />
            <Route exact path='/proyectos' component={Proyectos} />
            <Route exact path='/admisiones' component={Admisiones} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/MainDash' component={MainDash}/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
