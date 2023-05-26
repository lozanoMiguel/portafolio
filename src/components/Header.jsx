import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import useColor from '../hooks/useColor.jsx'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"
import ModalTransition from './ModalTransition';

export default function Header() {

  const [t, i18n] = useTranslation("global");
  const [toggleButton, setToggleButton] = useState(false)
  const [fun] = useColor()
  const [modal, setModal] = useState(false)
  const navigate = useNavigate();

  useEffect(()=>{
    fun();
    
  })

  const change = () =>{
    if(i18n.language === "es"){
      i18n.changeLanguage("en")
    }else{
      i18n.changeLanguage("es")
    }
  }
  
  const handleToggle = () =>{
    if(toggleButton)
      setToggleButton(false)
    else
      setToggleButton(true) 
  }

  const transition = (param) =>{
    setModal(true)
    setTimeout(() => {
      setToggleButton(false)
      navigate(param)
      setModal(false)
    }, 2000);
  }

  return (
    <>
      {modal && <ModalTransition sty={ "modalTransition off" } />}
      <header id='header' className= { toggleButton ? 'active' : '' }>
          <div className='brand'>
            <a onClick={()=>transition('/')}>Miguel Lozano</a>
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
              <motion.li onClick={()=>transition('/about')} whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>{t("header.about")}</motion.li>
              <motion.li onClick={()=>transition('/contact')} whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>{t("header.contact")}</motion.li>
              <motion.li onClick={()=>transition('/projects')} whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3 }}>{t("header.projects")}</motion.li>
            </ul>
          </nav>
      </header>
    </>
  )
}
