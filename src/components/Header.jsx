import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import useColor from '../hooks/useColor.jsx'
import { useTranslation } from 'react-i18next';

export default function Header() {

  const [t, i18n] = useTranslation("global");

  const [toggleButton, setToggleButton] = useState(false)
  const [fun] = useColor()

  const change = () =>{
    if(i18n.language === "es"){
      i18n.changeLanguage("en")
    }else{
      i18n.changeLanguage("es")
    }
  }
  
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
          <FontAwesomeIcon icon={faLanguage} className='translate_icon' onClick={change}/>
        </div>
        <nav className='navbar'>
          <a href="#" className='toggle-button' onClick={()=>{handleToggle()}} >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </a>
          <ul className={ toggleButton ? 'navbar_list active' : 'navbar_list' }>
            <li onClick={()=>navigate('/about')}>{t("header.about")}</li>
            <li onClick={()=>navigate('/contact')}>{t("header.contact")}</li>
            <li onClick={()=>navigate('/projects')}>{t("header.projects")}</li>
          </ul>
        </nav>
    </header>
  )
}
