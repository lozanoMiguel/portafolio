import React from 'react'
import '../styles/Home.css'
import Portada from '../images/fotoPortada.jpg'

export default function Home() {
  return (
    <main id='home'>
      <div id='intro' className='intro'>
        <div className='intro-container'>
          <h1 className='intro-container_title'>
            Software developer
            <br />
            <span className='intro-container_location'>Barcelona, ES</span>
          </h1>
          <p className='intro-container_info'>Hola! soy Miguel, programador Front-end. Aquí les mostraré un poco de mi vida, mis proyectos e intereses. </p>
        </div>
      </div>
      <div id='image' className='image'>
        <div className='image-container'>
          <img src={ Portada } alt="Miguel Lozano" />
        </div>
      </div>
    </main>
  )
}
