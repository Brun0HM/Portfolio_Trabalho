import React from "react";
import { pages, getPageIndex } from "../data/pages";

// Navegação entre as páginas, exibida sempre na parte inferior,
// logo acima do rodapé.
const PagePager = ({ page }) => {
  const currentIndex = getPageIndex(page);
  if (currentIndex === -1) return null;

  const previous = pages[currentIndex - 1];
  const next = pages[currentIndex + 1];

  return (
    <nav className="page-pager" aria-label="Navegação entre páginas">
      <div className="page-pager-side">
        {previous && (
          <a className="page-pager-link" href={previous.href}>
            <i className="bi bi-arrow-left-short fs-4" aria-hidden="true"></i>
            <span>
              <small>Anterior</small>
              {previous.label}
            </span>
          </a>
        )}
      </div>
      <div className="page-pager-side page-pager-side--next">
        {next && (
          <a className="page-pager-link" href={next.href}>
            <span>
              <small>Próxima</small>
              {next.label}
            </span>
            <i className="bi bi-arrow-right-short fs-4" aria-hidden="true"></i>
          </a>
        )}
      </div>
    </nav>
  );
};

export default PagePager;
