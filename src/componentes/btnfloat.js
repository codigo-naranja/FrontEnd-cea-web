import React , {Component } from 'react';
import '../App.css';

class btnfloat extends Component {
    
    render(){
        return(
            <div class="fixed-action-btn">
                <a class="btn-floating btn-large btnfloat" href="#inicio">
                    <i class="large material-icons">arrow_upward</i>
                </a>
            </div>
        );
    }
}

export default btnfloat;