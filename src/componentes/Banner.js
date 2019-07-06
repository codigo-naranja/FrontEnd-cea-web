import React , {Component } from 'react';
import '../App.css';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="row rowconmagtop">
                <img className="responsive-img imgbanner" src={this.props.ruta} alt="Banner"/>
            </div>
        );
    }
}

export default Banner;