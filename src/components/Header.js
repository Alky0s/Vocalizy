import React from 'react';
import Logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <img className="header_logo" src={Logo} alt='Logo Vocalizy'></img>
            <nav>
                <ul className='header_nav'>
                    <li className='header_nav--link'>
                        <NavLink to ="/">Accueil</NavLink>
                    </li>
                    <li className='header_nav--link'>
                        <NavLink to ="/About">Qui suis-je ?</NavLink>
                    </li>
                    <li className='header_nav--link'>
                        <NavLink to ="/Services">Mes prestations</NavLink>
                    </li>
                    <li className='header_nav--link'>
                        <NavLink to ="/Comments">Livre d'or</NavLink>
                    </li>
                    <li className='header_nav--link'>
                        <NavLink to ="/Partners">Partenaires</NavLink>
                    </li>
                    <li className='header_nav--link'>
                        <NavLink to ="/Join">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;