import React from 'react'
import './user.css'
import {Browser as Router, Link, Route} from 'react-router-dom'
import Post from './Post'


const User = ({id, name, title, post}) => {
    return (
        <div className='border'>
           <Link to={`./Post/${id}`} key={id}>{name}</Link>
            <div className='Posts'>
                <p><span>{title}</span></p>
                <p>Here's a recipe for the best <span>{post}</span></p>
                <p> </p>
            </div>
        </div>
    )
}
export default User;