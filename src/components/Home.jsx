import React from 'react'
import '../styles/Home.css'
import Portada2 from '../images/fotoPortada2.jpeg'

export default function Home() {
  return (
    <main id='main'>
      <div className='home'>
        <div id='intro' className='intro'>
          <div className='intro-container'>
            <h1 className='intro-container_title'>
              Desarrollador de software
              <br />
              <span className='intro-container_location'>Barcelona, ES</span>
            </h1>
            <p className='intro-container_info'>Hola, me llamo Miguel. Soy un programador frontend con interés en el backend también.
                                                He creado éste sitio web a modo de portfolio para mostrar mis proyectos, contar un poco acerca de mi
                                                y tener un medio de contacto si quieres que hablemos :)
            </p>
          </div>
        </div>
        <div id='image' className='image'>
          <div className='image-container'>
            <img src={ Portada2 } alt="Miguel Lozano" />
          </div>
        </div>
      </div>
    </main>
  )
}
