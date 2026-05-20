import { useDispatch } from "react-redux";
import { toggleLanguage } from "../../store/slices/languageSlice";
import { useTranslation } from "../../hooks/useTranslation";

import "./LanguageSwitcher.scss";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { lang } = useTranslation();

  return (
    <button
      className="lang-switcher"
      onClick={() => dispatch(toggleLanguage())}
      type="button"
      aria-label="Toggle language"
    >
      {lang === "ua" ? "EN" : "UA"}
    </button>
  );
};

export default LanguageSwitcher;
