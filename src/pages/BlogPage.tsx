import { Link } from 'react-router-dom';
import {Breadcrumb} from "../components/Breadcrumb.tsx";

const articles = [
  {
    slug: '/blog/guia-sistema-avaliacao-univesp',
    title: 'Guia Completo do Sistema de Avaliação da UNIVESP',
    description: 'Entenda em detalhes como sua nota final é composta, desde as atividades semanais até o exame final.'
  },
  {
    slug: '/blog/dicas-prova-presencial-univesp',
    title: '5 Dicas Essenciais para a Prova Presencial da UNIVESP',
    description: 'A prova presencial representa 60% da sua nota. Prepare-se com estratégias práticas para garantir um bom resultado.'
  },
  {
    slug: '/blog/desvendando-projeto-integrador-univesp',
    title: 'Desvendando o Projeto Integrador (PI) da UNIVESP',
    description: 'O que é, quais as etapas e como garantir uma boa nota no trabalho mais importante do seu semestre.'
  }
];

export const BlogPage = () => {

  const breadcrumbLinks = [
    { name: 'Início', path: '/' },
    { name: 'Blog' },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb links={breadcrumbLinks} />
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
          Blog & Artigos
        </h1>
        <div className="space-y-8">
          {articles.map((article) => (
            <Link to={article.slug} key={article.slug} className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{article.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{article.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};