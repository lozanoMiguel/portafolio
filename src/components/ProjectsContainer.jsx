import React from "react";
import "../styles/ProjectsContainer.css";
import Project from "./Project";
import p2 from "../images/libroNovedades.png";
import p4 from "../images/batSignal.png";
import { useTranslation } from "react-i18next";
import ModalTransition from "./ModalTransition";

export default function ProjectsContainer() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      {<ModalTransition sty={"modalTransition on"} />}
      <main id="main">
        <section className="projectsContainer">
          <div className="title">
            <h2>{t("projects.projectsTitle")}</h2>
          </div>
          <div className="container">
            <Project
              url={"https://lozanomiguel.github.io/libroNovedades/"}
              img={p2}
              title={t("projects.p2title")}
              description={t("projects.p2")}
            />
            <Project
              url={"https://lozanomiguel.github.io/batSignal/"}
              img={p4}
              title={t("projects.p4title")}
              description={t("projects.p4")}
            />
          </div>
        </section>
      </main>
    </>
  );
}
