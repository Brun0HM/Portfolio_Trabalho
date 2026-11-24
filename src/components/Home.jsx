import React, { useState, useEffect } from "react";
import fotoDePerfil from "../assets/FotodePerfil.jpg";

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const professions = [
      "Desenvolvedor",
      "Analista de Suporte",
      "Estudante na Fatec",
      "Desenvolvimento Web",
    ];

    const timeout = setTimeout(
      () => {
        const currentProfession = professions[currentIndex];

        if (isDeleting) {
          // Apagando caracteres
          setCurrentText(
            currentProfession.substring(0, currentText.length - 1)
          );
        } else {
          // Escrevendo caracteres
          setCurrentText(
            currentProfession.substring(0, currentText.length + 1)
          );
        }

        // Lógica para controlar quando parar de escrever/apagar
        if (!isDeleting && currentText === currentProfession) {
          // Terminou de escrever, espera um pouco e começa a apagar
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === "") {
          // Terminou de apagar, muda para próxima profissão
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % professions.length);
        }
      },
      isDeleting ? 50 : 100
    ); // Velocidade do efeito

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-5 container-fluid">
      {/* Imagem primeiro no mobile */}
      <div className="d-block d-md-none mb-4 position-relative">
        <img
          src={fotoDePerfil}
          alt="Bruno Martins"
          className="img-fluid rounded-circle tamano"
        />
        <div className="sparkle-container" aria-hidden="true">
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
        </div>
      </div>

      {/* Conteúdo de texto */}
      <div className="d-flex flex-column gap-1 flex-grow-1">
        <h1 className="NomeGrande fw-bolder mb-0">
          Bruno <span className="text-primary">Martins</span>
        </h1>
        <span className="fs-2 typewriter-container">
          <span className="typewriter-text">{currentText}</span>
          <span className="typewriter-cursor">|</span>
        </span>
        <span className="fs-5 text-secondary">
          Analista de Suporte Júnior na STI3 Sistemas e estudante na Fatec,
          construindo minha carreira em desenvolvimento de software.
        </span>
        <div className="mt-4 d-flex flex-wrap gap-3">
          <a
            className="btn btn-outline-primary text-white rounded-3 fw-bold"
            href="./projetos.html"
          >
            Ver Projetos
            <i className="bi bi-arrow-right-short fs-5" aria-hidden="true"></i>
          </a>
          <a
            className="btn btn-primary rounded-3 fw-bold"
            href="./sobre.html"
          >
            Sobre mim
            <i className="bi bi-arrow-right-short fs-5" aria-hidden="true"></i>
          </a>
        </div>
        <div className="mt-3 d-flex gap-3 align-items-center">
          <span className="text-white text-decoration-none icon-link d-flex align-items-center">
            <i
              className="bi bi-geo-alt-fill icon-animated me-1"
              aria-hidden="true"
            ></i>
            Jaú, SP
          </span>
          <a
            href="https://www.linkedin.com/in/brunomartinsdevv/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link d-flex align-items-center"
            aria-label="LinkedIn de Bruno Martins"
          >
            <i className="text-white fs-5 text-decoration-none bi bi-linkedin icon-animated"></i>
          </a>
          <a
            href="mailto:contato.bruno2007@gmail.com"
            className="icon-link d-flex align-items-center"
            aria-label="Enviar e-mail para Bruno Martins"
          >
            <i className="text-white fs-5 bi bi-envelope-fill icon-animated"></i>
          </a>
        </div>
      </div>

      {/* Imagem no desktop - lado direito */}
      <div className="d-none d-md-flex align-items-center ms-5 position-relative">
        <img
          src={fotoDePerfil}
          alt="Bruno Martins"
          className="img-fluid rounded-circle tamano"
        />
        <div className="sparkle-container" aria-hidden="true">
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
