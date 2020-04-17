import React, { Component } from 'react';
import 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/css/Main.css'

class Navbar extends Component {
    render() {
        return (
            <section className="header">
                <nav className="navbar">
                    <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
                    <a href="project">Projects</a>
                    <a href="#container-about"><i className="fa fa-fw fa-user"></i>About</a>
                    <a href="#skillheader"><i className="fa fa-fw fa-xing"></i>Skills</a>
                    <a href="#portfolio"><i className="fa fa-fw fa-github-alt"></i>Portfolio</a>
                    <a href="#contactnav"><i className="fa fa-fw fa-envelope"></i>Contact</a>

                </nav>
            </section>    

        )
    }
}

export default Navbar

/*
       <section class="header">
            <div class="overlay">
                <div class="row">
                   <div class="navbar navbar-default">
                      <div class="container-fluid">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                            <div class="navlogo col-lg-2">
                                <a class="navbar-brand" href="#">Name</a>
                            </div>
                          
                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                          
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <div class="col-lg-8">
                                      <ul class="nav navbar-nav nav-links">
                                         <li><a href="#">Demos</a></li>
                                        <li><a href="#">Featured</a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a href="#">Elements</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Shop</a></li>

                                      </ul>
                                    </div>
                                    
                                <div class="col-lg-2 right">
                                     <ul class="nav navbar-nav navbar-right">
                                        <li><a href="#"><i class="fa fa-search fa-2x"></i></a></li>
                                        <li><a href="#"><i class="fa fa-shopping-cart fa-2x"></i></a></li>
                                         
                                    </ul>
                                </div>
                              
                            </div>
                         

                      </div>
                 </div>
                
                
                </div>
        
                
                
                
                
            </div>
        </section>

*/