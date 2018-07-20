import React from 'react';

const NewsItem = ({item}) => {
    // console.log(props)
    return (
        <div>
            <h4>{item.title}</h4>
            <div>{item.feed}</div>
        </div>    
        )
}

export default NewsItem;