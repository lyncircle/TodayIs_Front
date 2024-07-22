import React from 'react';
import './SlideMenu.css';

function SlideMenu({ isOpen, onClose }) {
  return (
    <div className={`slide-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>×</button>
      <ul>
        <li>게임</li>
        <li>Quiz</li>
        <li>챌린지</li>
        <li>Q & A</li>
      </ul>
    </div>
  );
}

export default SlideMenu;