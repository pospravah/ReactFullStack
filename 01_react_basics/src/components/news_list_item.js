import React from 'react';
import { css } from 'glamor';

const NewsItem = ({item}) => {
    
    let news_item = css({
        padding:'20px',
        boxSizing: 'border-box',
        borderBottom: '1px solid yellow',
        ':hover':{
            color:'blue'
        },
        '@media(max-width:500px)':{
            color: 'blue'
        }
    })

    let item_grey = css({
        background: 'lightgrey'
    })

    //1st. usage: <div {...news_item} {...item_grey}>
    //2nd equals usage: <div className={`${news_item} ${item_grey}`}>

    return (
        <div className={`${news_item} ${item_grey}`}>
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div>    
        )
}

export default NewsItem;