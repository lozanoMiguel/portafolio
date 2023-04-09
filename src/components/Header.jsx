import React, { useState } from 'react'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

export default function Header() {

  const [toggleButton, setToggleButton] = useState(false)
  
  //navegamos hacia la pagina que se indique
  const navigate = useNavigate();
  //obtenemos las variables css para cambiar los colores segun la pagina donde estemos
  const root = document.querySelector(':root');
  
  const handleNavigate = (e) =>{
    if(e === '/'){
      root.style.setProperty('--primary-color-bg', '#CBE4DE')
      root.style.setProperty('--secondary-color-bg', '#313b57')
      root.style.setProperty('--primary-color-text','#CBE4DE')
      root.style.setProperty('--secondary-color-text', '#313b57')
      root.style.setProperty('--filter', 'invert(17%) sepia(9%) saturate(3003%) hue-rotate(187deg) brightness(98%) contrast(82%)')
      root.style.setProperty('--filter1', 'invert(91%) sepia(22%) saturate(140%) hue-rotate(115deg) brightness(95%) contrast(91%)')
    }else if(e === '/about'){
      root.style.setProperty('--primary-color-bg', '#40513B')
      root.style.setProperty('--secondary-color-bg', '#40513B')
      root.style.setProperty('--primary-color-text','#EDF1D6')
      root.style.setProperty('--secondary-color-text', '#EDF1D6')
      root.style.setProperty('--filter', 'invert(91%) sepia(11%) saturate(355%) hue-rotate(33deg) brightness(107%) contrast(89%)')
      root.style.setProperty('--filter1', 'invert(96%) sepia(6%) saturate(663%) hue-rotate(23deg) brightness(103%) contrast(89%)')
    }else if(e === '/contact'){
      root.style.setProperty('--primary-color-bg', '#A9907E')
      root.style.setProperty('--secondary-color-bg', '#A9907E')
      root.style.setProperty('--primary-color-text','#F3DEBA')
      root.style.setProperty('--secondary-color-text', '#F3DEBA')
      root.style.setProperty('--filter', 'invert(92%) sepia(34%) saturate(433%) hue-rotate(315deg) brightness(99%) contrast(93%)')
      root.style.setProperty('--filter1', 'invert(96%) sepia(6%) saturate(663%) hue-rotate(23deg) brightness(103%) contrast(89%)')
    }
    navigate(`${e}`);
  }
  
  const handleToggle = () =>{
    if(toggleButton)
      setToggleButton(false)
    else
      setToggleButton(true) 
  }

  return (
    <header id='header' className= { toggleButton ? 'active' : '' }>
        <div className='brand'>
          <a onClick={()=>{handleNavigate('/')}}>Miguel Lozano</a>
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
            <li onClick={()=>{handleNavigate('/about')}}>About</li>
            <li onClick={()=>{handleNavigate('/contact')}}>Contact</li>
            <li>Projects</li>
          </ul>
        </nav>
    </header>
  )
}
