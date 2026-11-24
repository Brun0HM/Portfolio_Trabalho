import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ParticlesBackground from "./ParticlesBackground";
import PagePager from "./PagePager";

// Estrutura comum a todas as páginas: fundo animado, menu fixo,
// conteúdo da página, navegação entre páginas e rodapé.
// O main ocupa o espaço restante, empurrando a navegação para baixo.
const PageLayout = ({ page, children }) => {
  return (
    <>
      <ParticlesBackground />
      <NavBar page={page} />
      <main className="page-shell d-flex flex-column">
        {children}
        {page !== "home" && (
          <div className="container page-pager-wrap mt-auto">
            <PagePager page={page} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
