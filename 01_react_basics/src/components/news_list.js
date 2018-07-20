import React from 'react';
 
const NewsList = (props) => {

    const items = props.news.map((item)=>{
        return (
            <div>
                <h4>{item.title}</h4>
                <div>{item.feed}</div>
            </div>
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