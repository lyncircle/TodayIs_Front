import React from 'react';
import './MenuButton.css';

function MenuButton({ onClick }) {
  return (
    <button className="menu-button" onClick={onClick}>
      ☰
    </button>
  );
}

export default MenuButton;