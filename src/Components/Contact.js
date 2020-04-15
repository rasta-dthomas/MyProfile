import React, { Component } from 'react';
import contact from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/public/image/contactlogo.png';
import mailme from 'C:/Users/Mashona/MyProfile/my-profile-page/src/Components/public/image/contactlogo.png';

class Contact extends Component {
    render() {
        return (
            <section>
                <img id="contacting" src={contact} width="250" height="250" alt="contactlogo" />
                <h4>Email Id: rasta.dthomas@outlook.com</h4>
                <a id="mail" href="https://mail.google.com/mail/?view=cm&fs=1&to=dethomas1@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me" /></a>
            </section>
            
        )
    }
}

export default Contact