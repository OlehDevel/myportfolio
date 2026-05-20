import { MainPage, Skills, Projects, Contact, Footer, LanguageSwitcher } from "../components";

import "./wrapper.scss";

function App() {
  return (
    <div className="wrapper">
      <LanguageSwitcher />
      <MainPage />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
