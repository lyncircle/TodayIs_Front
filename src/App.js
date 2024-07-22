import React, { useState, useEffect } from 'react';
import './App.css';
import MenuButton from './MenuButton.js';
import SlideMenu from './SlideMenu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [holidayMessage, setHolidayMessage] = useState('');
  const [holidayDescription, setHolidayDescription] = useState('');

  // 처음 렌더링될 때 실행됨
  useEffect(() => {
    const date = getCurrentDate();
    setCurrentDate(date);
    const holidayInfo = getHolidayMessage(date);
    setHolidayMessage(holidayInfo.message);
    setHolidayDescription(holidayInfo.description);
  }, []);

  // 현재 날짜 가져옴
  function getCurrentDate() {
    const date = new Date();
    const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1 해줌
    const day = date.getDate();
    return `${month}월 ${day}일`;
  }

  // 특정 날짜랑 국제기념일 매칭
  function getHolidayMessage(date) {
    const holidays = {
      '01월 01일': { message: '지구 가족의 날', description: '<지구 가족의 날>은 지구의 모든 생명체가 한 가족임을 인식하고 서로를 존중하며 보호하자는 취지의 날입니다.' },
      '01월 27일': { message: '유대인 대학살 국제 추모의 날', description: '<유대인 대학살 국제 추모의 날>은 제 2차 세계 대전 중 발생한 유대인 대학살을 기억하고, 이러한 비극이 다시 일어나지 않도록 다짐하는 날입니다.' },
      '02월 02일': { message: '세계 습지의 날', description: '<세계 습지의 날>은 습지의 중요성을 알리고 보전의 필요성을 강조하는 날입니다.' },
      '02월 04일': { message: '세계 암의 날', description: '<세계 암의 날>은 암 예방, 조기 발견 및 치료의 중요성을 알리는 날입니다.' },
      '02월 21일': { message: '국제 모국어의 날', description: '<국제 모국어의 날>은 언어와 문화의 다양성을 존중하고 모국어를 보호하자는 취지의 날입니다.' },
      //나무위키 보고 2월까지 해놓음, 3월부터 넣으면 됨
      '7월 22일': { message: '(구라임!!!)세계 펭귄의 날', description: '<세계 펭귄의 날>입니다. 펭귄아, 사랑해~' },
      '7월 23일': '세계 햄스터의 날(구라임)',
      '7월 24일': '세계 햄스터의 날(구라임)',
      '7월 25일': '세계 햄스터의 날(구라임)',
      '7월 26일': '세계 햄스터의 날(구라임)',
      '7월 27일': '세계 햄스터의 날(구라임)',
      '7월 28일': '세계 햄스터의 날(구라임)',
      '7월 29일': '세계 햄스터의 날(구라임)',
      '7월 30일': '세계 햄스터의 날(구라임)',
      '7월 31일': '세계 햄스터의 날(구라임)'
    };

    return holidays[date] || { message: '', description: '' };
  }

  // 메뉴 버튼
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <MenuButton onClick={handleMenuClick} />
      </header>
      <SlideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="App-main">
        <div className="penguin-icon">🐧</div>
        <h1>{currentDate}</h1>
        <h2>"{holidayMessage}"</h2>
        <div className="message">
          <p>{holidayDescription}</p>
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