import Card from 'react-bootstrap/Card';
import React from 'react';
import { Link } from 'react-router-dom'; // Importando o componente Link para navegação
 
const HomePage = () => {
  return (
    <div style={containerStyle}>
      <h1 style={tituloStyle}>Bem-vindo à nossa Página Inicial!</h1>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={require("../img/images.jpg")} style={imgStyle} />
      </Card>
      <p style={descricaoStyle}>Clique no botão abaixo para ver as últimas notícias:</p>
      <Link to="/news" style={botaoStyle}>Ver Notícias</Link>
    </div>
  );
};
 
// Estilos
const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
};
 
const tituloStyle = {
  borderBottom: '2px solid #333',
  paddingBottom: '0.5rem',
  marginBottom: '1.5rem',
};
 
const descricaoStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.5',
};
 
const botaoStyle = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  backgroundColor: '#ADFF2F',
  color: '#FFF',
  textDecoration: 'none',
  borderRadius: '5px',
  marginTop: '1rem',
};
 
const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1.5rem',
};
 
const imgStyle = {
  width: '90vh',
  display: 'block',
  margin: '0 auto',
};
 
export default HomePage;