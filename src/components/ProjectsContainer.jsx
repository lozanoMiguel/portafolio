import React from 'react'
import '../styles/ProjectsContainer.css'
import Project from './Project'
import p1 from '../images/equipoHistorico.png'

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
            img = { p1 }
            title = {'Equipo histórico'}
            description = {'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat molestiae qui debitis assumenda ipsam obcaecati odit mollitia repellendus. Eum, dicta doloremque! Dolor quisquam nemo beatae quo expedita consequuntur illum aspernatur?'}
          />
        </div>
      </section>
    </main>
  )
}
