import React, { Component } from 'react';
import contact from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/public/image/contactlogo.png';
import mailme from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/public/image/mailmeimgII.png';
// import ShareLink from 'react-linkedin-share-link';
import 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/css/Main.css';

class Contact extends Component {
    render() {
        return (
            <section className="container-1">
                <img id="contactimg" src={contact} position="center" width="250" height="250" alt="contactlogo" />
                {/* <ShareLink link='https://' */}
                <h4>Email Id: dethomas1@gmail.com</h4>
                <a id="mail" href="https://mail.google.com/mail/?view=cm&fs=1&to=dethomas1@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me" /></a>
                <h4>Contact Info: (home) 901-512-6902/ (cell) 504-621-4342</h4>
                    <a href="https://www.linkedin.com/in/rastaprogrammer">
                        <span className="icon fa fa-linkedin-square" style={{color: 'antiquewhite'}}></span>
                    </a>
            </section>
            
        )
    }
}

export default Contact;