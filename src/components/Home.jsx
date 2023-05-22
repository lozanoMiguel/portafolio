import React from 'react'
import '../styles/Home.css'
import Portada2 from '../images/fotoPortada2.jpeg'
import { useTranslation } from 'react-i18next'
import ModalTransition from './ModalTransition';

export default function Home() {
  
  const[t, i18n] = useTranslation("global");
  
  return (
    <>
    {<ModalTransition sty= { "modalTransition on" } />}
     <main id='main'>
        <div className='home'>
          <div id='intro' className='intro'>
            <div className='intro-container'>
              <h1 className='intro-container_title'>
                {t("home.title")}
                <br />
                <span className='intro-container_location'>{t("home.location")}</span>
              </h1>
              <p className='intro-container_info'>{t("home.presentation")}</p>
            </div>
          </div>
          <div id='image' className='image'>
            <div className='image-container'>
              <img src={ Portada2 } alt="Miguel Lozano" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
