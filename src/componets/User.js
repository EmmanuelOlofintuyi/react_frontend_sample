import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './user.css'
import Post from './Post'

// 




// export const getStaticPaths = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/posts')
//     const data = await res.json()

//     const paths = data.map(users => {
//         return{
//             params:{id: users.id.toString() }
//         }
//     })
//     return{
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) =>{
//     const id = context.params.id;
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ id + '/posts')
//     const data = await res.json();
//     return{
//         props: {users: data}
//     }
// }



const Home = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => {
            console.log(err)
        })
      }
      console.log(posts)
      

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='border'>
            <div className='Posts'>
                {posts && 
                    posts.map((post) =>  (
                    <Post key={post.id} id={post.id} title={post.title} body={post.body}/>
                ))}
            </div>
        </div>
    )
}

export default Home;