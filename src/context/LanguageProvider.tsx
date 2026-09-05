import {
  useState,
  type ReactNode,
} from "react";

import { en } from "../translations/en";
import { es } from "../translations/es";

import { LanguageContext } from "./LanguageContext";


type Language = "en" | "es";


export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [language, setLanguage] =
    useState<Language>("en");


  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev === "en" ? "es" : "en"
    );
  };


  const t =
    language === "en"
      ? en
      : es;


  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}