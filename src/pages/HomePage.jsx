import React from "react";
import Home from "../components/Home";

const exploreItems = [
  {
    href: "./sobre.html",
    icon: "bi-person",
    title: "Sobre",
    text: "Quem sou, minha trajetória e meu objetivo profissional.",
  },
  {
    href: "./experiencias.html",
    icon: "bi-briefcase",
    title: "Experiências",
    text: "Minha atuação na área de Tecnologia da Informação.",
  },
  {
    href: "./escolaridade.html",
    icon: "bi-mortarboard",
    title: "Escolaridade",
    text: "Minha formação acadêmica na Fatec.",
  },
  {
    href: "./skills.html",
    icon: "bi-code-slash",
    title: "Skills",
    text: "React, ASP.NET, banco de dados e outras competências.",
  },
  {
    href: "./projetos.html",
    icon: "bi-window-stack",
    title: "Projetos",
    text: "Bazinga Store, Curumim Kids, DevFlix e EnerCheck.",
  },
  {
    href: "./contato.html",
    icon: "bi-envelope",
    title: "Contato",
    text: "E-mail, GitHub e LinkedIn para conversarmos.",
  },
];

const HomePage = () => {
  return (
    <>
      <div
        id="home"
        className="container d-flex flex-column justify-content-center align-items-center min-vh-100 scroll-animation"
      >
        <Home />
      </div>

      <section className="container home-explore pb-5">
        <div className="row g-4 scroll-animation">
          <div className="col-12">
            <span className="page-kicker">Navegue pelo portfólio</span>
            <h2 className="h3 fw-bold mb-0">Explore as páginas</h2>
          </div>

          {exploreItems.map((item) => (
            <div className="col-12 col-sm-6 col-xl-3" key={item.title}>
              <a
                className="explore-card card h-100 bg-body border-secondary border-2 rounded-3 text-decoration-none"
                href={item.href}
              >
                <div className="card-body d-flex flex-column p-4">
                  <i
                    className={`bi ${item.icon} fs-2 text-primary mb-3`}
                    aria-hidden="true"
                  ></i>
                  <h3 className="h5 fw-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary mb-4">{item.text}</p>
                  <span className="explore-link mt-auto">
                    Acessar
                    <i
                      className="bi bi-arrow-right-short fs-5"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
