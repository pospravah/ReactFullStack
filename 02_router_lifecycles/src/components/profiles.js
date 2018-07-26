import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Profile = (props) => {

    console.log(props)

    const redir = () => {
        props.history.push('/')
    }

    return (
        <div>
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}>take me to /profile/posts</Link>
            
            {/* <Redirect to="/" /> */}
            {/* {redir()} */}
        </div>
    )
}

export default Profile;