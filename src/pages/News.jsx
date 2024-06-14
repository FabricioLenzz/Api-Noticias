import React, { useState, useEffect } from 'react';
 
const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=4f31f62a0ff4461bb0fe191ae45abec8');
        const data = await response.json();
        console.log(data); // Verifique os dados retornados
        setNews(Array.isArray(data.articles) ? data.articles : []);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar as notícias:', error);
        setLoading(false);
      }
    };
 
    fetchNews();
  }, []);
 
  console.log(news); // Verifique o estado atual de 'news'
  console.log(loading); // Verifique o estado atual de 'loading'
 
  if (loading) {
    return <p style={loadStyle}>Carregando notícias...</p>;
  }
 
  return (
    <div style={containerStyle}>
      <h1 style={tituloStyle}>Últimas Notícias</h1>
      <ul style={listaStyle}>
        {news.map((article, index) => (
          <li key={index} style={itemStyle}>
            <h2 style={tituloNoticiaStyle}>{article.title}</h2>
            <p style={descricaoStyle}>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>Leia mais</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
// Estilos
const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '1rem',
  textAlign: 'center',
};
 
const tituloStyle = {
  fontSize: '2rem',
  marginBottom: '1rem',
};
 
const listaStyle = {
  listStyleType: 'none',
  padding: '0',
};
 
const itemStyle = {
  borderBottom: '1px solid #ccc',
  paddingBottom: '1rem',
  marginBottom: '1rem',
  textAlign: 'left',
};
 
const tituloNoticiaStyle = {
  fontSize: '1.5rem',
  margin: '0.5rem 0',
};
 
const descricaoStyle = {
  fontSize: '1rem',
  margin: '0.5rem 0',
};
 
const linkStyle = {
  fontSize: '1rem',
  color: '#0074D9',
  textDecoration: 'none',
};
 
const loadStyle = {
  fontSize: '1.5rem',
  textAlign: 'center',
};
 
export default News;