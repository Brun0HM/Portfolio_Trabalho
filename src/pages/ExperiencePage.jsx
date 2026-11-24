import React from "react";
import PageSection from "../components/PageSection";
import DataList from "../components/DataList";

const ExperiencePage = () => {
  return (
    <PageSection kicker="Trajetória" title="Experiências Profissionais">
      <p className="page-lead">
        Minha atuação profissional na área de Tecnologia da Informação, com foco
        em suporte a sistemas.
      </p>

      <article className="timeline-item card bg-body border-secondary border-2 rounded-3">
        <div className="card-body p-4">
          <div className="d-flex flex-wrap justify-content-between align-items-start gap-2">
            <div>
              <h2 className="h4 fw-bold mb-1">
                Analista de Suporte Júnior
              </h2>
              <p className="text-primary fw-semibold mb-0">STI3 Sistemas</p>
            </div>
            <span className="badge bg-primary rounded-pill px-3 py-2">
              Atual
            </span>
          </div>

          <p className="text-secondary mt-3 mb-4">
            Atuação na área de Tecnologia da Informação e no suporte a sistemas.
          </p>

          <DataList
            items={[
              { term: "Empresa", value: "STI3 Sistemas" },
              { term: "Cargo", value: "Analista de Suporte Júnior" },
              {
                term: "Área",
                value: "Tecnologia da Informação e suporte a sistemas",
              },
              { term: "Situação", value: "Em andamento" },
            ]}
          />
        </div>
      </article>

      <p className="page-note">
        O detalhamento das atividades e responsabilidades será acrescentado
        conforme confirmação.
      </p>

      <div className="d-flex flex-wrap gap-3 mt-4">
        <a
          href="./escolaridade.html"
          className="btn btn-primary rounded-3 fw-bold project-btn-live"
        >
          Ver Escolaridade
          <i className="bi bi-arrow-right-short fs-5" aria-hidden="true"></i>
        </a>
        <a
          href="./skills.html"
          className="btn btn-outline-primary text-white rounded-3 fw-bold"
        >
          Ver Skills
          <i className="bi bi-arrow-right-short fs-5" aria-hidden="true"></i>
        </a>
      </div>
    </PageSection>
  );
};

export default ExperiencePage;
