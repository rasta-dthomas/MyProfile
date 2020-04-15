import React from 'react';
import desktopImage from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/public/image/prsnlOfc-desktop.jpg';
import mobileImage from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/public/image/prsnlOfc-desktop.jpg';
import './App.css';

function App() {
  const image = window.innerWidth >= 650 ? desktopImage : mobileImage;
  return (
    <div className="App" style={{backgroundImage: `url(${image})`}}>
      <div className="App-content">
        <h1 className="text-color">My Professional Page</h1>
        <p className="p-color">Systems/Software Engineer/Full Stack Developer for hire.</p>
      </div>
    </div>
  );
}

export default App;
