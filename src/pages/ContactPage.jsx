import React from "react";
import Contact from "../components/Contact";
import PageSection from "../components/PageSection";

const ContactPage = () => {
  return (
    <PageSection kicker="Vamos conversar" title="Contato">
      <Contact />

      <div className="d-flex align-items-center gap-2 text-secondary mt-4">
        <i
          className="bi bi-geo-alt-fill text-white icon-animated"
          aria-hidden="true"
        ></i>
        <span className="fs-5">Jaú, SP</span>
      </div>

      <div className="mt-4">
        <a
          href="mailto:contato.bruno2007@gmail.com"
          className="btn btn-primary rounded-3 fw-bold project-btn-live"
        >
          <i className="bi bi-envelope-fill me-2" aria-hidden="true"></i>
          Enviar e-mail
        </a>
      </div>
    </PageSection>
  );
};

export default ContactPage;
