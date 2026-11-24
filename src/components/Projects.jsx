import React from "react";
import ProjectCard from "./ProjectCard";
import bazingaImage from "../assets/Screenshot 2025-07-15 at 13-47-16 BazzingaStore.png";
import CurumimImage from "../assets/Curumim.png";
import devFlix from "../assets/Screenshot 2025-07-15 at 13-57-19 Devflix.png";
import enerCheck from "../assets/Print.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bazinga Store",
      description:
        "A Bazinga Store é uma loja online de produtos geeks, games e eletrônicos, com serviços de conserto e sistema completo de compras.",
      image: bazingaImage,
      liveUrl: "https://bazinga-st.vercel.app/",
      repoUrl: "https://github.com/Brun0HM/BazingaSt",
    },
    {
      id: 2,
      title: "Curumim Kids",
      description:
        "Curumim Kids é uma plataforma institucional para a demonstração de produtos infantis sustentáveis, sendo projeto de conclusão de curso do curso de administração da ETEC Jaú.",
      image: CurumimImage,
      liveUrl: "https://curumimkids.vercel.app/",
      repoUrl: "https://github.com/Brun0HM/curumimKids",
    },
    {
      id: 3,
      title: "DevFlix",
      description:
        "DevFlix é uma plataforma de streaming de vídeos, mostrando os conteúdos mais populares do mundo, consumindo a API do TMDB.",
      image: devFlix,
      liveUrl: "https://projetodevflix-mauve.vercel.app",
      repoUrl: "https://github.com/Brun0HM/projetoDevFlix",
    },
    {
      id: 4,
      title: "EnerCheck",
      description:
        "EnerCheck é uma plataforma para a análise de plantas elétricas com o uso de IA. O site consome a API do Gemini e uma API própria feita pela equipe.",
      image: enerCheck,
      liveUrl: "https://enercheck-eta.vercel.app/",
      repoUrl: "https://github.com/Brun0HM/EnerCheckPrincipal",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <div className="row g-3">
            <div className="col-12">
              <ProjectCard
                title={projects[0].title}
                description={projects[0].description}
                image={projects[0].image}
                liveUrl={projects[0].liveUrl}
                repoUrl={projects[0].repoUrl}
              />
            </div>
            <div className="col-12">
              <ProjectCard
                title={projects[1].title}
                description={projects[1].description}
                image={projects[1].image}
                liveUrl={projects[1].liveUrl}
                repoUrl={projects[1].repoUrl}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row g-3">
            <div className="col-12">
              <ProjectCard
                title={projects[2].title}
                description={projects[2].description}
                image={projects[2].image}
                liveUrl={projects[2].liveUrl}
                repoUrl={projects[2].repoUrl}
              />
            </div>
            <div className="col-12">
              <ProjectCard
                title={projects[3].title}
                description={projects[3].description}
                image={projects[3].image}
                liveUrl={projects[3].liveUrl}
                repoUrl={projects[3].repoUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
