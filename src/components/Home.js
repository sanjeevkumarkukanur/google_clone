import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import Search from './Search'

function Home() {
    return (
        <div className='home'>
            <div className="home__header">
                <div className="home__headingLift">
                    <Link to='/about' >About</Link>
                    <Link to='/store' >Store</Link>
                </div>
                <div className="home__headingRight">
                    <Link to='/gmail' >Gmail</Link>
                    <Link to='/images' >Images</Link>
                    <AppsIcon />
                    <Avatar><img className="photo" src="https://avatars.githubusercontent.com/u/75248200?v=4" alt="" /></Avatar>
                </div>
            </div>  

            <div className="home__body">
                <img src='https://uwaterloo.ca/events/sites/ca.events/files/styles/wide-body-750px-wide/public/uploads/images/google-logo.jpg?itok=abYgzODd' alt='icon' />
                </div> 
                <div className="home__inputontainer">
                    <Search />
                </div>    
        </div>
    )
}

export default Home
