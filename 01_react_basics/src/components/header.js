import React,{ Component } from 'react';
import '../css/styles.css'

class Header extends Component {

    state = {
        title: 'the keywords',
        keywords:'Hello'
    }

    inputChangeHandler(event) {
        // console.log(event.target.value)
        this.setState({
            keywords: event.target.value
        })
    }

    hay (params)  {
        console.log("Hey!")
    }

    render() {
        console.log(this.state.keywords)
        return (
            <header className='logo' onClick = {this.hay}>
                <div>Logo</div>
                <input type='text'
                onChange={ (e) => this.inputChangeHandler(e)}
                />
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </header>
            )
    }
}

export default Header;