import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import JSON from './db.json';

//COMPONENTS
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {
    state = {
        news:JSON,
        filtered:[]
    }

    
    getKeyword = (event) => {
        // console.log(event.target.value)
        let key = event.target.value
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(key) > -1        
        });

        console.log(filtered);
        
        this.setState ({
            filtered        
        });
    }

    render (){
        let filtred = this.state.filtered;
        let news = this.state.news;

        return (
            <div>
                <Header passKeywords={this.getKeyword} passFilted ={filtred.length === 0 ? 'No search results' : 'Filtered results are shown' } />
                <NewsList news = { filtred.length === 0 ? news : filtred} donkey='Me!'>
                    The news here: 
                </NewsList>
            </div>
        ) 
    } 
}

ReactDOM.render(<App/>, document.querySelector('#root')); 