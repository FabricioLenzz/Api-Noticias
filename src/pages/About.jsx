import React from 'react';
 
const About = () => {
  return (
    <div style={containerStyle}>
      <h1 style={tituloStyle}>About Us</h1>
      <p style={descriptionStyle}>
      Lorem Ipsum
      </p>
    </div>
  );
};
 
// Given styles
const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
};
 
const tituloStyle = {
  borderBottom: '2px solid #333',
  paddingBottom: '0.5rem',
  marginBottom: '1.5rem',
};
 
const descriptionStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.5',
};
 
export default About;