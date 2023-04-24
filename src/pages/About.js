import React from 'react';
import Header from '../components/Header';
// import KT from '../assets/kt2.jpg';
import KTT from '../assets/kt3.webp';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Header />
            <h1>Kévin TEILLIER Chanteur / Coach Vocal / Professeur de Chant</h1>
            <p>Passionné de musique depuis toujours, j'ai fait le choix d'en faire mon métier, et de partager ma passion au plus grand nombre.</p>
            <img src={KTT} alt="Kévin Teillier, coach vocal" />
            <p>Originaire de Bourges, je suis parti dans le Sud Ouest prendre des cours de Chant et me former pour devenir Coach Vocal.</p>
            <img src={KTT} alt="Kévin Teillier, coach vocal" />
            <p>Aujourd'hui titulaire du Diplôme Universitaire Pédagogie du Chant, Coaching Vocal et Métiers de la Scène, je souhaite partager et mettre à profit mon savoir faire aux amoureux de la musique.</p>
            <Footer />
        </div>
    );
};

export default About;