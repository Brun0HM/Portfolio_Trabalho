import { useEffect } from "react";
import { pages } from "../data/pages";

const NavBar = ({ page = "home" }) => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar-blur");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-blur">
      <div className="container-fluid">
        <a className="navbar-brand ms-0 ms-md-5 fw-bolder" href="./index.html">
          <span className="text-white">{"<"}</span>
          <span className="text-primary">BR</span>
          <span className="text-white">{"/>"}</span>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Abrir menu de navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {pages.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={`nav-link ${
                    page === item.id ? "active text-primary" : ""
                  }`}
                  href={item.href}
                  aria-current={page === item.id ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex me-lg-5 align-items-center nav-social">
            <a
              href="https://github.com/Brun0HM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              aria-label="GitHub de Bruno Martins"
            >
              <i className="bi bi-github fs-2 text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
