import React,{ Component } from 'react';
// import '../css/styles.css'
// enable of webpack modules needed for import classes
import classes from '../css/styles.css'
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
        
        return (
            <header  className={classes.logo}>  
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