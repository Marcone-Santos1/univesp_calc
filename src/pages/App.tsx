
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./HomePage.tsx";
import { AboutPage } from "./AboutPage.tsx";
import { GradeSystemGuide } from "../components/blog/articles/GradeSystemGuide.tsx";
import { NavBar } from "../components/NavBar.tsx";
import {BlogPage} from "./BlogPage.tsx";
import {InPersonTestTips} from "../components/blog/articles/InPersonTestTips.tsx";
import {ProjetoIntegrador} from "../components/blog/articles/ProjetoIntegrador.tsx";
import {UseOfStudies} from "../components/blog/articles/UseOfStudies.tsx";
import {DisciplinaEAD} from "../components/blog/articles/DisciplinaEAD.tsx";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkTheme') !== 'not-dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('darkTheme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('darkTheme', 'not-dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <BrowserRouter>
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/sobre" element={<AboutPage />} />

          <Route path="/blog" element={<BlogPage />} />

          <Route path="/blog/guia-sistema-avaliacao-univesp" element={<GradeSystemGuide />} />
          <Route path="/blog/dicas-prova-presencial-univesp" element={<InPersonTestTips />} />
          <Route path="/blog/desvendando-projeto-integrador-univesp" element={<ProjetoIntegrador />} />
          <Route path="/blog/aproveitamento-estudos-univesp" element={<UseOfStudies />} />
          <Route path="/blog/disciplina-e-procrastinacao-univesp" element={<DisciplinaEAD />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
};