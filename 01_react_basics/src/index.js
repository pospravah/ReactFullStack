import React from 'react';
import ReactDOM from 'react-dom'; 
import JSON from './db.json';

//COMPONENTS
import Header from './components/header'

const App = () => {
    console.log(JSON)
    return (
        <div>
            <Header/>
        </div>
    ) 
}

ReactDOM.render(<App/>, document.querySelector('#root')); 