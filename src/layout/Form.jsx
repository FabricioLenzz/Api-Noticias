import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StyledForm() {
  const navigate = useNavigate(); // useNavigate hook

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [theme, setTheme] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, theme });
    navigate('/noticias'); // Redirect to Noticias page
  };

  return (
    <div style={containerStyle}>
      <h1 style={tituloStyle}>Forms</h1>
      <form onSubmit={handleSubmit}>
        <div style={menuStyle}>
          <div style={menuItemStyle}>
            <label>
              Nome:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div style={menuItemStyle}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div style={menuItemStyle}>
            <label>
              Tema:
              <input
                type="text"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
}

// Styles
const containerStyle = {
  fontFamily: 'Arial, sans-serif',
};

const tituloStyle = {
  borderBottom: '2px solid #333',
  paddingBottom: '0.5rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const menuStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const menuItemStyle = {
  width: '300px',
  margin: '1rem',
  textAlign: 'center',
};

export default StyledForm;
