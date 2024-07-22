import React, { useState } from 'react';
import './App.css';
import  MenuButton from './MenuButton.js';
import SlideMenu from './SlideMenu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="App">
       <header className="App-header">
        <MenuButton onClick={toggleMenu} />
      </header>
      <SlideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="App-main">
        <div className="penguin-icon">🐧</div>
        <h1>오늘은 4월 25일</h1>
        <h2>"세계 펭귄의 날"</h2>
        <div className="message">
          <p>지구온난화로 펭귄들의 서식지가 줄어들고 있습니다. 펭귄에 대해 배우고 보호활동에 참여해보는 건 어떨까요?</p>
        </div>
        <div className="badge">
          <p>＜ 오늘의 뱃지 ＞</p>
          <div className="penguin-icon-small">🐧</div>
        </div>
      </main>
    </div>
  );
}

export default App;
