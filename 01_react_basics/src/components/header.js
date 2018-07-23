import React,{ Component } from 'react';
import '../css/styles.css'
import { backdrop } from '../../node_modules/glamor';

class Header extends Component {

    // state - special word in React for 'state'
    state = {
        active:'active',
        title:'the keywords',
        keywords:''
    }

    inputChangeHandler(event) {
        // console.log(event.target.value)
        const bcolor = event.target.value === '' ? 'active' : 'non-active' ;
        this.setState({
            keywords:event.target.value,
            active:bcolor
        })
    }

    hay (params)  {
        console.log("Hey!")
    }

    render() {
        
        // 1st. inline styling without variable - doublequotes:
        // style={{background:'yellow'}}
        // styling inline variable style
        // const style = {
        //     background: 'red'
        // }
        // if ( this.state.keywords == ''){
        //     style.background = 'red'
        // } else {
        //     style.background = 'green'
        // }
        // ex. header style={style}
        // ex. state. style={{background:`${this.state.active?'green':'red'}`}}

        return (
            <header style={{background:`${this.state.active=='active'?'red':'green'}`}} className={this.state.active}>  
                <div className='logo' onClick = {this.hay}>Logo</div>
                <input type='text'
                onChange={(e) => this.inputChangeHandler(e)}
                />
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </header>
            )
    }
}

export default Header;