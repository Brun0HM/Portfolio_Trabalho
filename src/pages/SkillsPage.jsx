import React from "react";
import Skills from "../components/Skills";
import PageSection from "../components/PageSection";
import { frontendSkills, backendSkills, otherSkills } from "../data/skills";

const SkillsPage = () => {
  return (
    <PageSection kicker="Competências" title="Skills">
      <p className="page-lead">
        Tecnologias e competências que utilizo no desenvolvimento dos meus
        projetos.
      </p>

      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-column gap-3">
            <Skills
              title="FrontEnd"
              iconClass="bi bi-code"
              items={frontendSkills}
            />
            <Skills
              title="BackEnd"
              iconClass="bi bi-hdd-stack"
              items={backendSkills}
            />
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex">
          <div className="w-100 skills-outros-container">
            <Skills
              title="Outros"
              iconClass="bi bi-person"
              items={otherSkills}
            />
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-3 mt-4">
        <a
          href="./projetos.html"
          className="btn btn-primary rounded-3 fw-bold project-btn-live"
        >
          Ver Projetos
          <i className="bi bi-arrow-right-short fs-5" aria-hidden="true"></i>
        </a>
        <a
          href="./contato.html"
          className="btn btn-outline-primary text-white rounded-3 fw-bold"
        >
          Entrar em contato
          <i className="bi bi-arrow-right-short fs-5" aria-hidden="true"></i>
        </a>
      </div>
    </PageSection>
  );
};

export default SkillsPage;
