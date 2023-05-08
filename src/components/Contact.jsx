import React from 'react'
import '../styles/Contact.css'
import CopyToClipboard, { copyToClipboard } from 'react-copy-to-clipboard'
import clip from '../images/clipboard-copy.svg'

export default function Contact() {
  return (
    <main id='main'>
      <section className='contact'>
        <div className='contact_content'>
          <h2>Hablamos?</h2>
          <p>Si quieres que trabajemos en un proyecto o te interesa que sea parte de tú empresa</p>
          <h3>EMAIL</h3>
          <div className='contact_content-email'>
            <p>lozanomiguel92@gmail.com</p>
            <CopyToClipboard text='lozanomiguel92@gmail.com'>
              <img src={ clip } alt="" className='icon filter' />
            </CopyToClipboard>
          </div>
        </div>
      </section>
    </main>
  )
}
