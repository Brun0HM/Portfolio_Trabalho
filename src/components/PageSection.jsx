import React from "react";

// Cabeçalho padrão das páginas internas: mantém o título à esquerda
// e o conteúdo à direita, como já acontecia nas seções originais.
const PageSection = ({
  kicker,
  title,
  children,
  headingCol = "col-12 col-md-3",
  contentCol = "col-12 col-md-9",
}) => {
  return (
    <section className="container page-main">
      <div className="row g-4 g-lg-5 align-items-start scroll-animation">
        <header className={`${headingCol} page-heading`}>
          {kicker && <span className="page-kicker">{kicker}</span>}
          <h1 className="fw-bold mb-0">{title}</h1>
        </header>
        <div className={contentCol}>{children}</div>
      </div>
    </section>
  );
};

export default PageSection;
