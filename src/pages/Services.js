import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import sing from '../assets/sing.jpg';
import duo from '../assets/duo.jpg';

const Services = () => {
    return (
        <div>
            <Header />
            <p className='services-p'>La voix est un instrument vivant, et demande un échauffement adapté. Éveil corporel, mise en voix, travail postural et de respiration, technique vocale... <br /> Cours adpatés à chaque élève de tous niveaux.</p>
            <div className='services'>
                <article className="services_article">
                    <img className="services_article-img" src={sing} alt="chanteuse" />
                    <h3 className="services_article-title">Cours de chant individuel</h3>
                    <h4 className="services_article-subtitle">30€ l'heure de cours.</h4>
                    <h4 className="services_article-subtitle">Plusieurs formules disponibles.</h4>
                </article>
                <article className="services_article">
                    <img className="services_article-duo" src={duo} alt="duo" />
                    <h3 className="services_article-title">Cours de chant DUO</h3>
                    <h4 className="services_article-subtitle">45€ l'heure de cours ou 60€ pour 1h30.</h4>
                </article>
            </div>
            <Footer />
        </div>
    );
};

export default Services;