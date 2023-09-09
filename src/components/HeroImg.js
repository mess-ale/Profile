import React from 'react'
import "./HeroImg.css"
import intro from "../assets/intro.jpg"
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={intro}
            alt='home page camera img' />
        </div>

        <div className='content'>
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to='/project' 
                className='btn'>Project</Link>
                <Link to='/contact' 
                className='btn btn-light'>Contact</Link>
            </div>
        </div>
        
    </div>
  )
}

export default HeroImg