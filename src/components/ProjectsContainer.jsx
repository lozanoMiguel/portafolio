import React from "react";
import "../styles/ProjectsContainer.css";
import Project from "./Project";
import p1 from "../images/libroNovedades.png";
import p2 from "../images/batSignal.png";
import p3 from "../images/chatbot.png";
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
              img={p1}
              title={t("projects.p1title")}
              description={t("projects.p1")}
            />
            <Project
              url={"https://lozanomiguel.github.io/batSignal/"}
              img={p2}
              title={t("projects.p2title")}
              description={t("projects.p2")}
            />
            <Project
              url={"https://chatbot-2-t231.onrender.com/"}
              img={p3}
              title={t("projects.p4title")}
              description={t("projects.p4")}
            />
          </div>
        </section>
      </main>
    </>
  );
}
