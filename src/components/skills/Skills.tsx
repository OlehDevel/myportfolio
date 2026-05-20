import { useTranslation } from "../../hooks/useTranslation";

import "./skills.scss";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills">
      <h3>{t.skills.title}</h3>
      <div className="skills-grid">
        <div className="skills-category">
          <h4>Frontend</h4>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React 19</li>
            <li>HTML5 / CSS3 / SASS</li>
          </ul>
        </div>
        <div className="skills-category">
          <h4>Tools & Ecosystem</h4>
          <ul>
            <li>Git / GitHub</li>
            <li>Vite</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Skills;
