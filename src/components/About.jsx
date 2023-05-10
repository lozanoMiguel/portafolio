import React from 'react'
import '../styles/About.css'
import { useTranslation } from 'react-i18next'

export default function About() {

  const[t, i18n] = useTranslation("global");

  return (
    <main id='main'>
      <section className='about'>
        <div className='about_title'>
          <h2>{t("about.title")}</h2>
        </div>
        <div className='about_info'>
          <p>{t("about.about_about1")}</p> 
          <p>{t("about.about_about2")}</p>
          <p>{t("about.about_about3")}</p>
          <p>{t("about.about_about4")}</p>
          <p>{t("about.about_about5")}</p>         
        </div>
        
      </section>
    </main>
  )
}
