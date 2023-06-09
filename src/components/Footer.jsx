import React from 'react'
import '../styles/Footer.css'
import mail from '../images/mail.svg'
//import instagram from '../images/brand-instagram.svg'
import linkedin from '../images/brand-linkedin.svg'
import github from '../images/icons8-github.svg'

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
          <p className={ location.pathname === '/contact' ? 'hiddenP' : ''}>{t("footer.affirmation")}<span><a onClick={()=>navigate('/contact')}>{t("footer.contact")}</a></span> </p>
        </div>
      </div>
      <div className='footer_socialMedia'>
        <div className='footer_socialMedia-title'>
          <p>{t("footer.social-medias")}</p>
        </div>
        <div className='footer_socialMedia-icons'>
          <a href="https://linkedin.com/in/lozanomiguel">
            <motion.img src={ linkedin } alt="https://linkedin.com/in/lozanomiguel" className='icon filter' whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}/>
          </a>
          <a href="mailto:lozanomigueldev@gmail.com">
            <motion.img src={ mail } alt="lozanomiguel92@gmail.com" className='icon filter' whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}/>
          </a>
          <a href="https://github.com/lozanoMiguel">
            <motion.img src={ github } alt="lozanomiguel92@gmail.com" className='icon filter' whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}/>
          </a>
        </div>
      </div>
    </footer>
  )
}
