import React, { Component }  from 'react';
import desktopImage from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/public/image/computer-336628.jpg';
import mobileImage from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/public/image/computer-336628.jpg';
import Navbar from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/Navbar';
import Contact from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Project extends Component {
  render() {

    const image = window.innerWidth >= 650 ? desktopImage : mobileImage;

    return (
      <div className="App" style={{backgroundImage: `url(${image})`}}>
        <Navbar />
          <br />
          <Contact />
      </div>
    );
  }
}


export default Project;