import logo from './levvel-logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import User from './componets/User'
import {BrowserRouter, Link, Route} from 'react-router-dom'


function App() {
  
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    
  
  
  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setPosts(data))
    .catch((err) => {
      console.log(err)
    })
  }




  
  console.log(posts)
  return ( 
   <BrowserRouter>
      <div className="App">
         
        <header className="App-header">
          <h1>LEVVEL's FOOD BLOG</h1>
        </header>
      <div>
        <p>Check Out Top Posts from our Authors!</p>
        </div>

        <div>
         
          {posts && 
          posts.map((post) =>  (
            <User id={post.id} key={post.id} name={post.name} title={post.company.catchPhrase} post={post.company.bs}/>
          ))
          }
         
        </div>
        
      </div>
      </BrowserRouter>
  );
}

export default App;
