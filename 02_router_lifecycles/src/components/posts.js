import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {

    const ids = [
        {id:'1', name:'Post 1-1'},
        {id:'2', name:'Post 2-2'},
        {id:'3', name:'Post 3-3'}
    ]

    // const list = ids.map( item => {
    //     return (
    //         <span key={item.id}>
    //             <Link to={item.id}>{item.name}</Link><br />
    //         </span>
    //     )
    // })

    // return ids.map (
        // <div>
        {/* <Link to="/posts/1">post 1</Link><br/>
        <Link to="/posts/2">post 2</Link><br/>
        <Link to="/posts/3">post 3</Link> */}
        {/* {list} */}
        {/* </div> */}

    return ids.map (item => {
        return (
             <span key={item.id}>
             {/* key is imortant */}
                <Link to={item.id}>{item.name}</Link><br />
            </span>
        )
        }
        )
}

export default Posts;