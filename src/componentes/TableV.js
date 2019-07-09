import React , {Component } from 'react';
import '../App.css';
import M from 'materialize-css';

class TableV extends Component{
    constructor (props) {
        super(props);
        }
    
        render(){
            return(
                <tr>
                    <td>{this.props.Nombre}</td>
                    <td>$ {this.props.Matricula} pesos</td>
                    <td>$ {this.props.Pension} pesos</td>
                </tr>
            );
        }
}

export default TableV;