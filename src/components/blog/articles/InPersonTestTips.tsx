import { ArticleLayout } from "../ArticleLayout.tsx";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet-async";

export const InPersonTestTips = () => {

  const pageTitle = "5 Dicas para a Prova Presencial UNIVESP | Calculadora de Notas";
  const pageDescription = "Estratégias e dicas essenciais para se preparar para a prova presencial da UNIVESP, que vale 60% da sua média. Chegue mais confiante para garantir sua nota.";
  const canonicalUrl = "https://univesp-calculadora.vercel.app/blog/dicas-prova-presencial-univesp"; // Substitua pelo seu domínio

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": pageDescription,
    "author": { "@type": "Person", "name": "Marcone Santos" },
    "publisher": {
      "@type": "Organization",
      "name": "Calculadora UNIVESP",
      "logo": { "@type": "ImageObject", "url": "https://univesp-calculadora.vercel.app/logo.png" }
    },
    "datePublished": "2025-10-03"
  };


  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <ArticleLayout title="Prova Presencial UNIVESP: Estratégias para Garantir seus 60%">
        <p className="lead">
          A prova presencial representa 60% da sua nota e é um momento decisivo no bimestre. Ir bem preparado
          pode ser a diferença entre a aprovação e o exame. Aqui estão 5 dicas práticas para você se organizar e ter mais segurança.
        </p>

        <h2>1. Revise o Conteúdo de Forma Estratégica</h2>
        <p>
          Não tente reler todo o material de uma vez na véspera. A chave é focar no que é mais importante.
        </p>
        <ul>
          <li><strong>Vídeos e PDFs:</strong> Passe novamente pelas "Semanas de Estudo" no AVA, focando nos conceitos-chave destacados pelos professores.</li>
          <li><strong>Atividades Avaliativas:</strong> Revise as questões das atividades semanais. Elas são um ótimo termômetro dos tópicos que a disciplina considera mais relevantes.</li>
        </ul>

        <h2>2. Entenda o Formato da Prova</h2>
        <p>
          Saber o que esperar diminui a ansiedade. A prova será de múltipla escolha? Terá questões dissertativas?
          Geralmente, os professores dão dicas sobre o formato da avaliação no vídeo de encerramento da última semana. Assista com atenção!
        </p>

        <h2>3. Gerencie seu Tempo de Prova</h2>
        <p>
          O tempo é um dos seus recursos mais preciosos. Antes de começar a responder, dê uma olhada geral em todas as questões para ter uma ideia do tamanho da prova. Comece pelas que você tem mais certeza para garantir esses pontos e depois se dedique às mais difíceis.
        </p>

        <h2>4. Cuidado no Preenchimento do Gabarito</h2>
        <p>
          Parece óbvio, mas muitos pontos são perdidos por desatenção. Reserve os minutos finais exclusivamente para preencher e revisar o gabarito. Verifique se o número da questão corresponde à marcação na folha de respostas.
        </p>

        <h2>5. Use a Tecnologia a seu Favor (Depois da Prova!)</h2>
        <p>
          A ansiedade pós-prova é real. Assim que sair, em vez de ficar apenas na dúvida, você pode ter uma ideia clara do seu status.
        </p>
        <p>
          Utilize a nossa <Link to="/">Calculadora UNIVESP</Link> para simular sua média final com a nota que você acha que tirou.
          Isso te ajuda a saber se precisará se preparar para o exame ou se já pode comemorar a aprovação.
        </p>
      </ArticleLayout>
    </>

  );
};