import React from "react";

const ProjectCard = ({ title, description, image, liveUrl, repoUrl }) => {
  return (
    <div className="project-card h-100">
      <div className="card rounded-3 h-100 bg-body border-secondary border-2">
        <div className="overflow-hidden" style={{ height: "200px" }}>
          <img
            src={image}
            className="card-img-top project-image w-100 h-100"
            alt={title}
          />
        </div>
        <div className="card-body d-flex flex-column p-3">
          <h3 className="card-title text-white mb-3 fs-5 fw-semibold">
            {title}
          </h3>
          <p
            className="card-text text-secondary flex-grow-1 mb-4"
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>
          <div className="d-flex gap-2 mt-auto">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-3 flex-fill project-btn-live"
            >
              <i className="bi bi-eye me-2"></i>
              Ver Projeto
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light rounded-3 flex-fill project-btn-repo"
            >
              <i className="bi bi-github me-2"></i>
              Repositório
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
