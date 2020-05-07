import React from "react";
import "./css/Main.css";

function Home() {

  const image = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
    <div className="App" style={{backgroundImage: `url(${image})`}}>
      <Navbar />
        <br />
        <Contact />
    </div>
  );
}

export default Home;