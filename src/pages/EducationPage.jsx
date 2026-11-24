import React from "react";
import PageSection from "../components/PageSection";
import DataList from "../components/DataList";

const EducationPage = () => {
  return (
    <PageSection kicker="Formação" title="Escolaridade">
      <p className="page-lead">
        Minha formação acadêmica e técnica, do curso de Desenvolvimento de
        Sistemas ao ensino superior na Fatec.
      </p>

      <div className="d-flex flex-column gap-4">
        <article className="timeline-item card bg-body border-secondary border-2 rounded-3">
          <div className="card-body p-4">
            <div className="d-flex flex-wrap justify-content-between align-items-start gap-2">
              <div>
                <h2 className="h4 fw-bold mb-1">Desenvolvimento de Sistemas</h2>
                <p className="text-primary fw-semibold mb-0">SENAI Jaú</p>
              </div>
              <span className="badge bg-primary rounded-pill px-3 py-2">
                Concluído
              </span>
            </div>

            <p className="text-secondary mt-3 mb-4">
              Curso de Desenvolvimento de Sistemas realizado no SENAI Jaú, antes
              do ingresso na Fatec.
            </p>

            <DataList
              items={[
                { term: "Instituição", value: "SENAI Jaú" },
                { term: "Curso", value: "Desenvolvimento de Sistemas" },
                { term: "Situação", value: "Concluído" },
              ]}
            />
          </div>
        </article>

        <article className="timeline-item card bg-body border-secondary border-2 rounded-3">
          <div className="card-body p-4">
            <div className="d-flex flex-wrap justify-content-between align-items-start gap-2">
              <div>
                <h2 className="h4 fw-bold mb-1">Fatec</h2>
                <p className="text-primary fw-semibold mb-0">
                  Ensino superior em tecnologia
                </p>
              </div>
              <span className="pending-badge rounded-pill px-3 py-2">
                Cursando
              </span>
            </div>

            <p className="text-secondary mt-3 mb-4">
              Atualmente estudo na Fatec, onde venho aprofundando minha formação
              na área de tecnologia e construindo a base que aplico no trabalho
              e nos meus projetos.
            </p>

            <DataList
              items={[
                { term: "Instituição", value: "Fatec" },
                {
                  term: "Curso",
                  value: "Desenvolvimento de sistemas Multiplataforma",
                },

                { term: "Semestre / período", value: "1º semestre" },
                { term: "Situação", value: "Cursando" },
              ]}
            />
          </div>
        </article>
      </div>

      <p className="page-note">
        Os campos marcados como “A confirmar” serão preenchidos com as
        informações oficiais do curso.
      </p>

      <div className="d-flex flex-wrap gap-3 mt-4">
        <a
          href="./skills.html"
          className="btn btn-primary rounded-3 fw-bold project-btn-live"
        >
          Ver Skills
          <i className="bi bi-arrow-right-short fs-5" aria-hidden="true"></i>
        </a>
        <a
          href="./experiencias.html"
          className="btn btn-outline-primary text-white rounded-3 fw-bold"
        >
          Ver Experiências
          <i className="bi bi-arrow-right-short fs-5" aria-hidden="true"></i>
        </a>
      </div>
    </PageSection>
  );
};

export default EducationPage;
