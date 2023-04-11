import React from 'react'
import '../styles/Project.css'

export default function Project(props) {
  return (
    <div className='project'>
      <div className='project_imgContainer'>
        <img src={ props.img } alt="" />
      </div>
      <div className='project_info'>
        <div className='project_info-title'>
          <h3>
            { props.title }
          </h3>
        </div>
        <div className='project_info-description'>
          <p>
            { props.description }
          </p>
        </div>
      </div>
    </div>
  )
}
