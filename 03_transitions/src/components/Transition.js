import React, { Component } from 'react';
import Transition from 'react-transition-group';

import '../css/App.css';


class TransitionComp extends Component {

state = {
    show:false
}

showDiv = () => {
    this.setState({
        show: !this.state.show ? true : false
    })
}

render(){
        return(
            <div>
                {/* Start Here ==>> */}
                { this.state.show ? <div style={{
                    background: 'red',
                    height:'100px'
                }}>
                </div>
                :
                null}
            </div>
        )
    }
}

export default TransitionComp;