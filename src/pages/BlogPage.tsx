import { Link } from 'react-router-dom';
import {Breadcrumb} from "../components/Breadcrumb.tsx";
import {FaCalendarAlt, FaTag} from "react-icons/fa";

const articles = [
  {
    slug: '/blog/guia-sistema-avaliacao-univesp',
    title: 'Guia Completo do Sistema de Avaliação da UNIVESP',
    description: 'Entenda em detalhes como sua nota final é composta, desde as atividades semanais até o exame final.',
    date: '2025-10-05',
    tags: ['Acadêmico', 'Notas', 'Regulamento']
  },
  {
    slug: '/blog/dicas-prova-presencial-univesp',
    title: '5 Dicas Essenciais para a Prova Presencial da UNIVESP',
    description: 'A prova presencial representa 60% da sua nota. Prepare-se com estratégias práticas para garantir um bom resultado.',
    date: '2025-10-06',
    tags: ['Dicas', 'Provas', 'Estudos']
  },
  {
    slug: '/blog/desvendando-projeto-integrador-univesp',
    title: 'Desvendando o Projeto Integrador (PI) da UNIVESP',
    description: 'O que é, quais as etapas e como garantir uma boa nota no trabalho mais importante do seu semestre.',
    date: '2025-10-07',
    tags: ['Projeto Integrador', 'Trabalho em Grupo', 'Acadêmico']
  },
  {
    slug: '/blog/aproveitamento-estudos-univesp',
    title: 'Aproveitamento de Estudos na UNIVESP: Guia Completo para Validar suas Disciplinas',
    description: 'Guia completo sobre o aproveitamento de estudos na UNIVESP. Descubra como validar disciplinas, documentos necessários, prazos e critérios para dispensa de matérias.',
    date: '2025-10-09',
    tags: ['Aproveitamento', 'Disciplinas', 'Regulamento', 'Documentos']
  }
];

export const BlogPage = () => {

  const breadcrumbLinks = [
    { name: 'Início', path: '/' },
    { name: 'Blog' },
  ];

  const sortedArticles = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb links={breadcrumbLinks} />
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
          Blog & Artigos
        </h1>
        <div className="space-y-8">
          {sortedArticles.map((article) => (
            <Link to={article.slug} key={article.slug} className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2 space-x-4">
                <div className="flex items-center space-x-1">
                  <FaCalendarAlt />
                  <span>{new Date(article.date).toLocaleDateString('pt-BR', {day: '2-digit', month: 'long', year: 'numeric'})}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaTag />
                  <span>{article.tags.join(', ')}</span>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{article.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{article.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};