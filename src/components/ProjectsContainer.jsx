import React from 'react'
import '../styles/ProjectsContainer.css'
import Project from './Project'
import p1 from '../images/equipoHistorico.png'
import p2 from '../images/libroNovedades.png'
import p3 from '../images/notes.png'
import p4 from '../images/batSignal.png'

export default function ProjectsContainer() {
  return (
    <main id='main'>
      <section className='projectsContainer'>
        <div className='title'>
            <h2>My Projects</h2>
        </div>
        <div className='container'>
          <Project 
            img = { p1 }
            title = {'Equipo histórico'}
            description = {'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestiae qui debitis assumenda ipsam obcaecati odit mollitia repellendus. Eum, dicta doloremque! Dolor quisquam nemo beatae quo expedita consequuntur illum aspernatur?'}
          />
          <Project 
            img = { p2 }
            title = {'Libro novedades'}
            description = {'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestiae qui debitis assumenda ipsam obcaecati odit mollitia repellendus. Eum, dicta doloremque! Dolor quisquam nemo beatae quo expedita consequuntur illum aspernatur?'}
          />
          <Project 
            img = { p3 }
            title = {'Notas'}
            description = {'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestiae qui debitis assumenda ipsam obcaecati odit mollitia repellendus. Eum, dicta doloremque! Dolor quisquam nemo beatae quo expedita consequuntur illum aspernatur?'}
          />
          <Project 
            img = { p4 }
            title = {'Bati señal'}
            description = {'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestiae qui debitis assumenda ipsam obcaecati odit mollitia repellendus. Eum, dicta doloremque! Dolor quisquam nemo beatae quo expedita consequuntur illum aspernatur?'}
          />
        </div>
      </section>
    </main>
  )
}
