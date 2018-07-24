import React from 'react';
// enable of webpack modules needed for import classes
import classes from '../css/styles.css'

const NewsItem = (props) => {
    
    // console.log(props);

    return (
        <div className={classes.blablabla}>
            <h3>{props.item.title}</h3>
            <div>
                {props.item.feed}
            </div>
        </div>    
        )
}

export default NewsItem;