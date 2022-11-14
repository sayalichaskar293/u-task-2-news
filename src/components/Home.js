
import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';

 const Home = ({user}) => {

 return (
   <>
   <nav className='Navbar'>
<Link to='/Home' className='links'>Home</Link>

<Link to='/FetchNewsApi' className='links'>Latest News</Link>
   </nav>
   <div className='welc'><h1>Welcome to NewsApp, {user?.name}</h1></div>
   </>
  )
}


export default Home