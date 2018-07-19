import React,{ Component } from 'react';
import '../css/styles.css'

class Header extends Component {
    
    render() {
        return (
            <header className='logo' onClick={ () => console.log('I was click on Logo!') } >
                <div>Logo</div>
                <input type='text'/>
            </header>
        )
    }
}

export default Header;