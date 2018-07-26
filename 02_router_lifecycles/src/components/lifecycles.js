import React, { Component } from 'react';

class Life extends Component {
    // 1st get default props
    // 2nd set default state
    state = {
        title:'Life cycles'
    }

    // 3th before render
     componentWillMount(){
         console.log('3th before render')
     }

    // 4th render jsx
    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }

    // 5th after render
    componentDidMount(){
        console.log('5th after render')
        document.querySelector('h3').style.color = 'red'
    }
}

export default Life;