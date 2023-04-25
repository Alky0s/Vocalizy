import React from 'react';
import Header from '../components/Header';
import AboutPic from '../assets/about1.JPG';
import KTT from '../assets/about2.JPG';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className='about'>
            <Header />
            <h1 className='about-title'>Kévin TEILLIER Chanteur / Coach Vocal / Professeur de Chant</h1>
            <div className='about-section'>
                <p className='about-section_text'>Passionné de musique depuis toujours, j'ai fait le choix d'en faire mon métier, et de partager ma passion au plus grand nombre.</p>
                <img className='about-section_pic' src={AboutPic} alt="Kévin Teillier, coach vocal" />
            </div>
            <div className='about-section2'>   
                <img className='about-section2_pic' src={KTT} alt="Kévin Teillier, coach vocal" />
                <div className='about-section2_content'>
                <p className='about-section2_content-text'>Aujourd'hui titulaire du Diplôme Universitaire Pédagogie du Chant, Coaching Vocal et Métiers de la Scène, je souhaite partager et mettre à profit mon savoir faire aux amoureux de la musique.</p>
                <p className='about-section2_content-text'>Originaire de Bourges, je suis parti dans le Sud Ouest prendre des cours de Chant et me former pour devenir Coach Vocal.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;