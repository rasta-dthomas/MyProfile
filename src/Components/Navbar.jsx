import React, { Component } from 'react';
import 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/css/Main.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <section className="header">
                <nav className="navbar">
                    <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
                    <a href="project">Projects</a>
                    <a href="#about"><i className="fa fa-fw fa-user"></i>About</a>
                    <a href="#skillheader"><i className="fa fa-fw fa-xing"></i>Skills</a>
                    <a href="#portfolio"><i className="fa fa-fw fa-github-alt"></i>Portfolio</a>
                    <a href="#contactnav"><i className="fa fa-fw fa-envelope"></i>Contact</a>

                </nav>
            </section>    

        )
    }
}

export default Navbar;


