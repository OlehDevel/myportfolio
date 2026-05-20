import { useSelector } from "react-redux";
import { type RootState } from "../store";
import { translations } from "../data/translations";

export const useTranslation = () => {
  const lang = useSelector((state: RootState) => state.language.lang);

  return {
    lang,
    t: translations[lang],
  };
};
