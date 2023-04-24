import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import cours from '../assets/cours-chant.jpg';

const Services = () => {
    return (
        <div>
            <Header />
            <p>La voix est un instrument vivant, et demande un échauffement adapté. Éveil corporel, mise en voix, travail postural et de respiration, technique vocale... Cours adpatés à chaque élève de tous niveaux.</p>
            <article>
                <img src={cours} alt="chanteuse" />
                <h3>Cours de chant individuel</h3>
                <h4>30€ l'heure de cours.</h4>
                <h4>Plusieurs formules disponibles.</h4>
            </article>
            <article>
                <img src={cours} alt="chanteuse" />
                <h3>Cours de chant DUO</h3>
                <h4>45€ l'heure de cours ou 60€ pour 1h30.</h4>
            </article>
            <Footer />
        </div>
    );
};

export default Services;