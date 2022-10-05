import React from 'react'
import './user.css'
import { Link } from 'react-router-dom'



const User = ({id, name, title, post}) => {
    return (
        <div className='border'>
           <Link to={`/user/${id}`} key={id}>
            {name}
            </Link>
            <div className='Posts'>
                <p><span>{title}</span></p>
                <p>Here's a recipe for the best <span>{post}</span></p>
                <p> </p>
            </div>
        </div>
    )
}
export default User;