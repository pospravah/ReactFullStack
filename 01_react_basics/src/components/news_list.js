import React from 'react';
import NewsItem from './news_list_item'; 

const NewsList = (props) => {

    // const items = props.news.map((item)=>{
    //     return (
    //         <div>
    //             <h4>{item.title}</h4>
    //             <div>{item.feed}</div>
    //         </div>
    //         )
    //     });

    const items = props.news.map((item)=>{
        return (
            <NewsItem  item={item} />
            )
        });
     

    //  console.log(props.donkey)
     return (
         <div>
            {items}
         </div>
     )
}

export default NewsList;