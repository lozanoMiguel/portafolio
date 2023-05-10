import React, { useState } from 'react'
import '../styles/Footer.css'
import mail from '../images/mail.svg'
import instagram from '../images/brand-instagram.svg'
import linkedin from '../images/brand-linkedin.svg'
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'


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
          <a href="https://www.instagram.com/_lozanomiguel">
            <img src={ instagram } alt="@_lozanomiguel" className='icon filter'/>
          </a>
          <a href="https://linkedin.com/in/lozanomiguel">
            <img src={ linkedin } alt="https://linkedin.com/in/lozanomiguel" className='icon filter'/>
          </a>
          <a href="mailto:lozanomiguel92@gmail.com">
            <img src={ mail } alt="lozanomiguel92@gmail.com" className='icon filter'/>
          </a>
        </div>
      </div>
    </footer>
  )
}
