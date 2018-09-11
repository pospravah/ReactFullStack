import React, { Component } from 'react';
import './layout.css'

class Layout extends Component {

    state = {

    }

    render(){
        return(
            <div>
                header layout
                {this.props.children}
                footer layout
            </div>
        )
    }
}

export default Layout;