import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import useColor from '../hooks/useColor.jsx'

export default function Header() {

  const [toggleButton, setToggleButton] = useState(false)
  const [fun] = useColor()
  
  const navigate = useNavigate();
  
  useEffect(()=>{
    fun();
  })

  const handleToggle = () =>{
    if(toggleButton)
      setToggleButton(false)
    else
      setToggleButton(true) 
  }

  return (
    <header id='header' className= { toggleButton ? 'active' : '' }>
        <div className='brand'>
          <a onClick={()=>navigate('/')}>Miguel Lozano</a>
        </div>
         <div className={toggleButton ? 'translate active' : 'translate'}>
          <FontAwesomeIcon icon={faLanguage} className='translate_icon' />
        </div>
        <nav className='navbar'>
          <a href="#" className='toggle-button' onClick={()=>{handleToggle()}} >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </a>
          <ul className={ toggleButton ? 'navbar_list active' : 'navbar_list' }>
            <li onClick={()=>navigate('/about')}>About</li>
            <li onClick={()=>navigate('/contact')}>Contact</li>
            <li onClick={()=>navigate('/projects')}>Projects</li>
          </ul>
        </nav>
    </header>
  )
}
