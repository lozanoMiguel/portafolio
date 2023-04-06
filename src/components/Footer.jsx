import React from 'react'
import '../styles/Footer.css'
import mail from '../images/mail.svg'
import instagram from '../images/brand-instagram.svg'
import linkedin from '../images/brand-linkedin.svg'


export default function Footer() {
  return (
    <footer id='footer' className='footer'>
      <div className='footer_info'>
        <div className='footer_info-message'>
          <h2>Let's go work togheter?</h2>
          <p>Let's get in touch! <span><a href="#">Contact</a></span> </p>
        </div>
      </div>
      <div className='footer_socialMedia'>
        <div className='footer_socialMedia-title'>
          <p>My social media</p>
        </div>
        <div className='footer_socialMedia-icons'>
          <a href="#">
            <img src={ instagram } alt="@_lozanomiguel" className='icon filter'/>
          </a>
          <a href="https://linkedin.com/in/lozanomiguel">
            <img src={ linkedin } alt="https://linkedin.com/in/lozanomiguel" className='icon filter'/>
          </a>
          <a href="#">
            <img src={ mail } alt="lozanomiguel92@gmail.com" className='icon filter'/>
          </a>
        </div>
      </div>
    </footer>
  )
}
