import React from "react";
import "./App.css";
import PageLayout from "./components/PageLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

// Cada arquivo HTML informa a página atual pelo atributo data-page do <body>.
// Assim o mesmo app React é reutilizado em todas as páginas.
const pageComponents = {
  home: HomePage,
  about: AboutPage,
  experience: ExperiencePage,
  education: EducationPage,
  skills: SkillsPage,
  projects: ProjectsPage,
  contact: ContactPage,
};

const App = ({ page = "home" }) => {
  useScrollAnimation();

  const Page = pageComponents[page] ?? HomePage;

  return (
    <PageLayout page={page}>
      <Page />
    </PageLayout>
  );
};

export default App;
