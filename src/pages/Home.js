import React from 'react';
import HomeBackground from '../components/HomeBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Singer from '../assets/chant1.jpg';
import Singer2 from '../assets/chant2.jpg';
import Singer3 from '../assets/chant3.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <Header />
            <HomeBackground />
            <section className='singer'>
                <h3>Des élèves de tout âge et de tous niveaux</h3>
                <div className='singer-pictures'>
                    <img className="" src={Singer} alt='chanteur élève'></img>
                    <img className="" src={Singer2} alt='chanteur élève'></img>
                    <img className="" src={Singer3} alt='chanteur élève'></img>
                </div>
            </section>
            <section className='singer'>
                <h3>Un concert chaque année pour s'exprimer devant son public !</h3>
                <div className='singer-pictures'>
                    <img className="" src={Singer} alt='chanteur élève'></img>
                    <img className="" src={Singer2} alt='chanteur élève'></img>
                    <img className="" src={Singer3} alt='chanteur élève'></img>
                </div>
            </section>
            <button className='singer-contact'><Link to={"/join"}>Trouvez votre "voix" !</Link></button>
            <Footer />
        </div>
    );
};

export default Home;