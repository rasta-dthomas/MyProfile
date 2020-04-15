import React from 'react';
import desktopImage from './Component/public/image/prsnlOfc-desktop.jpg';
import mobileImage from './Component/public/image/prsnlOfc-desktop.jpg';
import './App.css';

function App() {
  const image = window.innerWidth >= 650 ? desktopImage : mobileImage;
  return (
    <div className="App" style={{backgroundImage: `url(${image})`}}>
      <div className="App-content">
        <h1>My Professional Page</h1>
        <p>Systems/Software Engineer/Full Stack Developer for hire.</p>
      </div>
    </div>
  );
}

export default App;
