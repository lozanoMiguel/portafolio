import React, { useState } from 'react'
import '../styles/Footer.css'
import mail from '../images/mail.svg'
import instagram from '../images/brand-instagram.svg'
import linkedin from '../images/brand-linkedin.svg'
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion"


export default function Footer() {

  const[t, i18n] = useTranslation("global");

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer id='footer' className='footer'>
      <div className='footer_info'>
        <div className='footer_info-message'>
          <h2>{t("footer.question")}</h2>
          <p className={ location.pathname === '/contact' ? 'hiddenP' : ''}>{t("footer.affirmation")}<span><motion.a onClick={()=>navigate('/contact')} whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}>{t("footer.contact")}</motion.a></span> </p>
        </div>
      </div>
      <div className='footer_socialMedia'>
        <div className='footer_socialMedia-title'>
          <p>{t("footer.social-medias")}</p>
        </div>
        <div className='footer_socialMedia-icons'>
          <a href="https://www.instagram.com/_lozanomiguel">
            <motion.img src={ instagram } alt="@_lozanomiguel" className='icon filter' whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}/>
          </a>
          <a href="https://linkedin.com/in/lozanomiguel">
            <motion.img src={ linkedin } alt="https://linkedin.com/in/lozanomiguel" className='icon filter' whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}/>
          </a>
          <a href="mailto:lozanomiguel92@gmail.com">
            <motion.img src={ mail } alt="lozanomiguel92@gmail.com" className='icon filter' whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}/>
          </a>
        </div>
      </div>
    </footer>
  )
}
