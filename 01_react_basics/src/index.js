import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import JSON from './db.json';

//COMPONENTS
import Header from './components/header'
import NewsList from './components/news_list'

// const App = () => {
class App extends Component {
    // console.log(JSON)
    // return (
    //     <div>
    //         <Header/>
    //     </div>
    // )

    state = {
        news: JSON
    }

    render (){
        // console.log(this.state.news)
        return (
            <div>
                <Header/>
                <NewsList news={this.state.news} donkey='Me!' />
            </div>
        ) 
    } 
}

ReactDOM.render(<App/>, document.querySelector('#root')); 