import React from 'react'
import '../styles/ProjectsContainer.css'
import Project from './Project'
import p1 from '../images/equipoHistorico.png'
import p2 from '../images/libroNovedades.png'
import p3 from '../images/notes.png'
import p4 from '../images/batSignal.png'
import p5 from '../images/multirivel.png'
import p6 from '../images/paola.png'
import p7 from '../images/lozanomiguel.png'
import { useTranslation } from 'react-i18next'
import ModalTransition from './ModalTransition';

export default function ProjectsContainer() {

  const[t, i18n] = useTranslation("global");
  
  return (
    <>
      {<ModalTransition sty={'modalTransition on'}/>}
      <main id='main'>
        <section className='projectsContainer'>
          <div className='title'>
              <h2>{t("projects.projectsTitle")}</h2>
          </div>
          <div className='container'>
            <Project
              url = { "https://github.com/lozanoMiguel/equipoHistorico" } 
              img = { p1 }
              title = {t("projects.p1title")}
              description = {t("projects.p1")}
            />
            <Project 
              url = { "https://github.com/lozanoMiguel/libroNovedades" } 
              img = { p2 }
              title = {t("projects.p2title")}
              description = {t("projects.p2")}
            />
            <Project 
              url = { "https://github.com/lozanoMiguel/notes" } 
              img = { p3 }
              title = {t("projects.p3title")}
              description = {t("projects.p3")}
            />
            <Project 
              url = { "https://github.com/lozanoMiguel/batSignal" } 
              img = { p4 }
              title = {t("projects.p4title")}
              description = {t("projects.p4")}
            />
            <Project 
              url = { "https://github.com/lozanoMiguel/multirivelChallenge" } 
              img = { p5 }
              title = {t("projects.p5title")}
              description = {t("projects.p5")}
            />
            <Project 
              url = { "https://paolakremer.com" } 
              img = { p6 }
              title = {t("projects.p6title")}
              description = {t("projects.p6")}
            />
            <Project 
              url = { "https://github.com/lozanoMiguel/portafolio" } 
              img = { p7 }
              title = {t("projects.p7title")}
              description = {t("projects.p7")}
            />
          </div>
        </section>
      </main>
    </>
  )
}
