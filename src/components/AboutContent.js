import React from 'react'
import "./AboutContentStyles.css"
import { Link, NavLink } from 'react-router-dom'
import react2 from "../assets/react1.jpg"
import react1 from "../assets/react2.jpg"

const AboutContent = () => {
  return (
    <div>
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>Im a Computer Engineering Student
                    @ AASTU and a react front-end developer
                    responsive secure websites for my clients.
                </p>
                <Link to = '/contact' >
                    <button className='btn'>CONTACT</button>
                </Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack-top'>
                        <img src={react1}
                        className='img'
                        alt='true' />
                    </div><div className='img-stack-botton'>
                        <img src={react2}
                        className='img'
                        alt='true' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
