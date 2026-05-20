import { useTranslation } from "../../hooks/useTranslation";
import { contacts } from "../../data/contacts";

import "./mainPage.scss";

const contactLink = contacts.map((item) => {
  return (
    <div className="social-item" key={item.platform}>
      <p>{item.platform}</p>
      <a target="_blank" rel="noreferrer" href={item.link}>
        {item.name}
      </a>
    </div>
  );
});

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className="portfolio-wrapper">
      <main>
        <section id="about">
          <div className="hero-content">
            <span className="status-badge">{t.hero.subtitle}</span>
            <h1>
              {t.hero.title} <span>{t.hero.name}</span>
            </h1>
            <h2>{t.hero.role}</h2>
            <p>{t.hero.description}</p>
            <a href="#contact" className="hero-cta">
              {t.hero.cta}
            </a>
            <div className="social">{contactLink}</div>
          </div>

          <div className="hero-visual">
            <div className="code-card-glow blue-glow"></div>
            <div className="code-card-glow purple-glow"></div>
            <div className="code-card">
              <pre>
                <code>
                  {`const developer = {
  name: 'Oleh',
  role: 'Frontend',
  skills: ['React', 'TS', 'SCSS'],
  status: 'Ready_to_work'
};`}
                </code>
              </pre>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
