import React, { useState } from 'react'
import '../styles/Header.css'

export default function Header() {

  const [toggleButton, setToggleButton] = useState(false)

  const handleToggle = () =>{
    if(toggleButton)
      setToggleButton(false)
    else
      setToggleButton(true) 
  }

  return (
    <header id='header'>
        <div className='brand'>
          <a href='#'>Miguel Lozano</a>
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
            <div className={ toggleButton ? 'navbar_btn-container active' : 'navbar_btn-container' }>
              <button id='ES' className='navbar_btn-language'>ES</button><span className='btn-separator'>/</span><button id='EN' className='navbar_btn-language'>EN</button>
            </div>
        </nav>
    </header>
  )
}
