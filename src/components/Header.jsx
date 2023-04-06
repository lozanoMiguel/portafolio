import React, { useState } from 'react'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

  const [toggleButton, setToggleButton] = useState(false)

  const handleToggle = () =>{
    if(toggleButton)
      setToggleButton(false)
    else
      setToggleButton(true) 
  }

  return (
    <header id='header' className= { toggleButton ? 'active' : '' }>
        <div className='brand'>
          <a href='#'>Miguel Lozano</a>
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
            <li>About</li>
            <li>Contact</li>
            <li>Projects</li>
          </ul>
        </nav>
    </header>
  )
}
