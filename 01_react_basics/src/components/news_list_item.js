import React from 'react';
// enable of webpack modules needed for import classes
import classes from '../css/styles.css'

const NewsItem = ({item}) => {
    

    return (
        <div className={classes.blablabla}>
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div>    
        )
}

export default NewsItem;