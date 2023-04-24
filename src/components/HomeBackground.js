import React from 'react';
import KT from '../assets/kt2.jpg';



const Home_background = () => {
    return (
            <div className='home-background'>
                <div className='home-background_title'>
                    <h1>Le chant à portée de tous</h1>
                    <h2 >Cours de chant à Bourges</h2>
                    <p>Coach vocal sur Bourges et ses environs, je vous propose des cours de chant sur mesure en musiques actuelles. Partageons ensemble le plaisir de chanter.</p>
                    
                </div>
                <img src={KT} alt='moi'></img>
            </div>
    );
};

export default Home_background;