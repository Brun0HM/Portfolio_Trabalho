import React from "react";

const Skills = ({ title, items, iconClass }) => {
  return (
    <div className="container-fluid">
      <div className="align-items-center">
        <div className="d-flex justify-content-center">
          <div className="card skills-card border-2 bg-body text-light border-secondary">
            <div className="card-header border-0 fs-3 bg-body fw-bold text-start py-3">
              <i className={`${iconClass} me-2 fs-4`}></i>
              {title}
            </div>
            <div className="card bg-body p-4 pb-2">
              <ul className="skills-list list-unstyled mb-0">
                {items && items.length > 0 ? (
                  items.map((item, index) => (
                    <li
                      key={index}
                      className="skill-item d-flex align-items-center mb-3 p-3 pt-1 pb-1 bg-body"
                    >
                      <span className="fs-5 corzinha">{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="skill-item d-flex align-items-center mb-3 p-3 bg-black">
                    <span>Nenhuma skill disponível</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
