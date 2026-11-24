// Cada item representa uma página do portfólio.
// A ordem do array é usada pelo menu de navegação e pelos links de "Anterior/Próxima".
export const pages = [
  { id: "home", label: "Início", href: "./index.html" },
  { id: "about", label: "Sobre", href: "./sobre.html" },
  { id: "experience", label: "Experiências", href: "./experiencias.html" },
  { id: "education", label: "Escolaridade", href: "./escolaridade.html" },
  { id: "skills", label: "Skills", href: "./skills.html" },
  { id: "projects", label: "Projetos", href: "./projetos.html" },
  { id: "contact", label: "Contato", href: "./contato.html" },
];

export const getPageIndex = (id) =>
  pages.findIndex((page) => page.id === id);
