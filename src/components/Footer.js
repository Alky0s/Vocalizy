import React from 'react';
import Logo from '../assets/logo.jpg'
import Contact from './Contact';

const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <img className="footer_logo" src={Logo} alt='Logo Vocalizy'></img>
                <address>2 Av. Roland Garros, 18000 Bourges</address>
                <div className='footer_contact'>
                    <h3>Kévin TEILLIER</h3>
                    <h4>Coach Vocal</h4>
                    <Contact />
                </div>
            </footer>
        </div>
    );
};

export default Footer;