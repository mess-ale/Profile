import React from 'react'
import "./WorkCardStyles.css"
import { NavLink } from 'react-router-dom'

const WorkCardCard = (props) => {
  return (
    <div className='project-card'>
        <img src={props.img} alt='image' />
        <h2 className='project-title'>
            {props.ProTitle}
        </h2>
        <div className='pro-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
                <NavLink to={props.viewLink} target='_blank'
                className='btn'>
                    View
                </NavLink>
                <NavLink to={props.sourceLink} target='_blank'
                className='btn'>
                    Source
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCardCard