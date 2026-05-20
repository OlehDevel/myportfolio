import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Language } from "../../data/translations";

interface LanguageState {
  lang: Language;
}

const initialState: LanguageState = {
  lang: (localStorage.getItem("portfolio_lang") as Language) || "ua",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.lang = action.payload;
      localStorage.setItem("portfolio_lang", state.lang);
    },
    toggleLanguage: (state) => {
      state.lang = state.lang === "ua" ? "en" : "ua";
      localStorage.setItem("portfolio_lang", state.lang);
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
