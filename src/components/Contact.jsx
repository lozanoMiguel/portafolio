import React, { useEffect } from 'react'
import '../styles/Contact.css'
import CopyToClipboard from 'react-copy-to-clipboard'
import clip from '../images/clipboard-copy.svg'
import { useTranslation } from 'react-i18next'
import ModalTransition from './ModalTransition'

export default function Contact() {

  const[t, i18n] = useTranslation("global");

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      {<ModalTransition sty={'modalTransition on'}/>}
      <main id='main'>
        <section className='contact'>
          <div className='contact_content'>
            <h2>{t("contact.contact_talk")}</h2>
            <p>{t("contact.contact_msg")}</p>
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
    </>
  )
}
