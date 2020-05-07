import React, { Component }  from 'react';
import desktopImage from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/public/image/computer-336628.jpg';
import mobileImage from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/public/image/computer-336628.jpg';
import Navbar from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/Navbar';
import Card from './Components/Cards';
import Contact from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/* import About from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/About';
import { Route, Link } from 'react-router-dom'; */

class App extends Component {
  render() {

    const image = window.innerWidth >= 650 ? desktopImage : mobileImage;

    return (
      <div className="App" style={{backgroundImage: `url(${image})`}}>
        <Navbar />
        <br />
        <Card />
          <hr />
          <br />
        <h1 className="text-color">Davin Thomas</h1>
          <h3 className="p-color">Systems Engineer/Software Engineer/Full Stack Developer</h3>
          <Contact />
      </div>
    );
  }
}

export default App;

/* function App() {
  const image = window.innerWidth >= 650 ? desktopImage : mobileImage;
  return (
    <div className="App" style={{backgroundImage: `url(${image})`}}>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
        <br />
        <Card />
          <hr />
          <br />
        <h1 className="text-color">Davin Thomas</h1>
          <h3 className="p-color">Systems Engineer/Software Engineer/Full Stack Developer</h3>
          <Contact />
      </div>
    );
}

export default App; */