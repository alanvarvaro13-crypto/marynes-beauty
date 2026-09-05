import { createContext } from "react";
import { en, type Translation } from "../translations/en";


type Language = "en" | "es";


export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translation;
}


export const LanguageContext =
  createContext<LanguageContextType>({
    language: "en",
    toggleLanguage: () => {},
    t: en,
  });