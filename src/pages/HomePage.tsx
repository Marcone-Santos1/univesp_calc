import { GradeCalculator } from "./GradeCalculator.tsx";
import { Content } from "../components/Content.tsx";
import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Calculadora Univesp | Média, Exame e Simulação</title>
        <meta
          name="description"
          content="Calcule sua média final, simule a nota necessária no exame e planeje seus estudos na UNIVESP. A ferramenta mais completa para os alunos."
        />
        <link rel="canonical" href="https://univesp-calculadora.vercel.app/" />
      </Helmet>

      <GradeCalculator />
      <Content />
    </>
  );
};