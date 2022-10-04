import React from 'react'
import './user.css'
import User from './User'
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts/')
    const data = await res.json()

    const paths = data.map(users => {
        return{
            params:{id: users.id.toString() }
        }
    })
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts/' + id)
    const data = await res.json();
    return{
        props: {users: data}
    }
}



const Post = ({users}) => {
    return (
        <div className='border'>
            <div className='Posts'>
                <p><span>{users.title}</span></p>
                <p>Here's a recipe for the best <span>{users.body}</span></p>
                <p> </p>
            </div>
        </div>
    )
}
export default Post;