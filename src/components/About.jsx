import React from 'react'
import '../styles/About.css'
import  foto  from '../images/fotoPortada.jpg'

export default function About() {
  return (
    <main id='main'>
      <section className='about'>
        <div className='about_title'>
          <h2>Por qué éste sitio?</h2>
        </div>
        <div className='about_info'>
          <p>Desde que era muy pequeño en Argentina, siempre me llamó la atención el mundo de los ordenadores. Recuerdo un amigo de mi infancia que era capaz de encontrar cualquier cosa en internet, desde juegos hasta películas o discos de música, ¡y para mí eso era magia!</p>
          <p>A pesar de que en un principio estudié una tecnicatura en programación en la UTN más por curiosidad que por fines profesionales, hoy en día mi enfoque ha cambiado. Me he dado cuenta de que quiero entrar en este hermoso mundo del desarrollo y por eso creé este sitio web.</p>
          <p>Durante mis estudios universitarios, tuve la oportunidad de desarrollar algunos proyectos interesantes, como una plataforma similar a Netflix o sistemas de reservas de hotel. También he trabajado de forma independiente para una casa de ropa, desarrollando un sistema de comunicación, así como para una project manager, creando su sitio web.</p> 
          <p>Además de la programación, tengo otros intereses en mi vida. Me encanta el deporte, especialmente el fútbol y voy al gimnasio para oxigenar mi cerebro. También toco la guitarra, lo que me ayuda a aumentar mi creatividad, y disfruto mucho pasar tiempo con mis amigos para mantener un equilibrio entre mis responsabilidades diarias y mi vida social.</p> 
          <p>Estoy muy emocionado de empezar mi carrera profesional y estoy seguro de que será una aventura maravillosa. ¡Gracias por leer mi historia!</p>         
        </div>
        
      </section>
    </main>
  )
}
