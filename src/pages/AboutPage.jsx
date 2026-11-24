import React from "react";
import About from "../components/About";
import PageSection from "../components/PageSection";
import fotoDePerfil from "../assets/FotodePerfil.jpg";

const pillars = [
  {
    icon: "bi-briefcase",
    title: "Experiência",
    text: "Analista de Suporte Júnior na STI3 Sistemas.",
    href: "./experiencias.html",
    linkLabel: "Ver experiências",
  },
  {
    icon: "bi-mortarboard",
    title: "Formação",
    text: "Estudante na Fatec, construindo base em tecnologia.",
    href: "./escolaridade.html",
    linkLabel: "Ver escolaridade",
  },
  {
    icon: "bi-bullseye",
    title: "Objetivo",
    text: "Evoluir para o desenvolvimento de sistemas.",
    href: "./skills.html",
    linkLabel: "Ver skills",
  },
];

const AboutPage = () => {
  return (
    <PageSection
      kicker="Quem sou"
      title="Sobre Mim"
      headingCol="col-12 col-md-4"
      contentCol="col-12 col-md-8"
    >
      <About />

      <div className="row g-3 mt-4">
        {pillars.map((pillar) => (
          <div className="col-12 col-md-4" key={pillar.title}>
            <div className="pillar-card card h-100 bg-body border-secondary border-2 rounded-3">
              <div className="card-body d-flex flex-column p-4">
                <i
                  className={`bi ${pillar.icon} fs-3 text-primary mb-3`}
                  aria-hidden="true"
                ></i>
                <h2 className="h5 fw-semibold text-white mb-2">
                  {pillar.title}
                </h2>
                <p className="text-secondary small mb-3">{pillar.text}</p>
                <a
                  className="explore-link mt-auto text-decoration-none"
                  href={pillar.href}
                >
                  {pillar.linkLabel}
                  <i
                    className="bi bi-arrow-right-short fs-5"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="about-profile card bg-body border-secondary border-2 rounded-3 mt-4">
        <div className="card-body d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-4 p-4">
          <img
            src={fotoDePerfil}
            alt="Bruno Martins"
            className="profile-avatar rounded-circle"
          />
          <div className="text-center text-sm-start">
            <h2 className="h4 fw-bold mb-1">Bruno Martins</h2>
            <p className="text-secondary mb-3">
              Analista de Suporte Júnior · STI3 Sistemas
            </p>
            <div className="d-flex flex-wrap justify-content-center justify-content-sm-start gap-3">
              <span className="icon-link">
                <i
                  className="bi bi-geo-alt-fill icon-animated me-1"
                  aria-hidden="true"
                ></i>
                Jaú, SP
              </span>
              <a
                href="https://github.com/Brun0HM"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <i
                  className="bi bi-github icon-animated me-1"
                  aria-hidden="true"
                ></i>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/brunomartinsdevv/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <i
                  className="bi bi-linkedin icon-animated me-1"
                  aria-hidden="true"
                ></i>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-3 mt-4">
        <a
          href="./skills.html"
          className="btn btn-primary rounded-3 fw-bold project-btn-live"
        >
          Ver Skills
          <i className="bi bi-arrow-right-short fs-5" aria-hidden="true"></i>
        </a>
        <a
          href="./projetos.html"
          className="btn btn-outline-primary text-white rounded-3 fw-bold"
        >
          Ver Projetos
          <i className="bi bi-arrow-right-short fs-5" aria-hidden="true"></i>
        </a>
      </div>
    </PageSection>
  );
};

export default AboutPage;
