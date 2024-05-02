import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Contatos() {
  return (
    <div style={containerStyle}>
      <section id="contato">
        <h2 style={TituloStyle}>Contato</h2>
        <div style={contatoStyle}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Informações de Contato</Card.Title>
              <Card.Text>
              <p>Endereço: Rua Do Senac, 007</p>
                <p>Cidade: Joinville</p>
                <p>CEP: 89212-410</p>
                <p>Telefone: (47) 99987-4580</p>
                <p>Email: adamo.adamo@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
}

const containerStyle = {
  fontFamily: 'Arial, sans-serif'
};

const TituloStyle = {
  borderBottom: '2px solid #333',
  paddingBottom: '0.5rem',
  marginBottom: '1.5rem'
};

const contatoStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem'
};

export default Contatos;