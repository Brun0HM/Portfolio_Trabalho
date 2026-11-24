import React from "react";
import Projects from "../components/Projects";
import PageSection from "../components/PageSection";

const ProjectsPage = () => {
  return (
    <PageSection kicker="Portfólio" title="Projetos">
      <p className="page-lead">
        Uma seleção de projetos que desenvolvi, com link para o site publicado
        e para o código-fonte no GitHub.
      </p>

      <h2 className="visually-hidden">Lista de projetos</h2>

      <Projects />

      <div className="d-flex flex-wrap gap-3 mt-4">
        <a
          href="./contato.html"
          className="btn btn-primary rounded-3 fw-bold project-btn-live"
        >
          Vamos conversar
          <i className="bi bi-arrow-right-short fs-5" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/Brun0HM"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary text-white rounded-3 fw-bold"
        >
          Ver GitHub
          <i className="bi bi-github ms-1" aria-hidden="true"></i>
        </a>
      </div>
    </PageSection>
  );
};

export default ProjectsPage;
