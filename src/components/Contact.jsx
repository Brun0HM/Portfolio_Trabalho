import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div>
          <p className="text-secondary fs-5 text-justify mb-3 lh-base">
            Interessado em trabalhar comigo? Sinta-se à vontade para entrar em
            contato por qualquer um dos canais abaixo.
          </p>
          <div className="d-flex flex-column gap-3">
            <a
              href="mailto:contato.bruno2007@gmail.com"
              className="icon-link d-flex align-items-center gap-2"
            >
              <i className="text-white fs-5 bi bi-envelope-fill icon-animated"></i>
              <span className="fs-5 text-secondary text-break">
                contato.bruno2007@gmail.com
              </span>
            </a>
            <a
              href="https://github.com/Brun0HM"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link d-flex align-items-center gap-2"
            >
              <i className="text-white fs-5 bi bi-github icon-animated"></i>
              <span className="fs-5 text-secondary text-break">
                github.com/Brun0HM
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/brunomartinsdevv/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link d-flex align-items-center gap-2"
            >
              <i className="text-white fs-5 bi bi-linkedin icon-animated"></i>
              <span className="fs-5 text-secondary text-break">
                linkedin.com/in/brunomartinsdevv
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
