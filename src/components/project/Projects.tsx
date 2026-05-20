import { useTranslation } from "../../hooks/useTranslation";
import "./Projects.scss";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <h3>{t.projects.title}</h3>

      <div className="projects-loader-container">
        <div className="loader-header">
          <span className="loader-text">{t.projects.loading}</span>
          <span className="loader-percentage">85%</span>
        </div>

        <div className="progress-bar">
          <div className="progress-bar-fill"></div>
        </div>

        <p className="projects-subtitle">{t.projects.subtitle}</p>
      </div>
    </section>
  );
};

export default Projects;
