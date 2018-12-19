import React from 'react';

const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const h1Style = {
  fontSize: '15px',
  textAlign: 'center'
};

const Box = () => (
  <div style={divStyle}>
    <p style={h1Style}>Get started with inline style</p>
  </div>
);

export default Box;